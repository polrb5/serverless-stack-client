import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { AppContext } from './libs/contextLib';
import onError from './libs/errorLib';
import Routes from './routes';

import { Box, Flex } from './components/ui';

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  min-height: calc(100vh - 84px);
`;

const HeaderWrapper = styled.header`
  padding: 30px 7%;
  width: 100%;
  border-bottom: 1px solid black;
`;

const HeaderContent = styled(Flex)`
  margin: auto;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
`;

const HeaderLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: all 0.2s;
  font-weight: bold;
`;

const NavBar = styled(Flex)`
  gap: 40px;
`;

const NavLinksWrapper = styled(Flex)`
  font-size: 20px;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  gap: 4rem;
`;

function App() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  const handleLogut = async () => {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push('/login');
  };

  useEffect(() => {
    const onLoad = async () => {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
      } catch (e) {
        if (e !== 'No current user') {
          onError(e);
        }
      }

      setIsAuthenticating(false);
    };
    onLoad();
  }, []);

  return (
    !isAuthenticating
    && (
    <LayoutWrapper>
      <HeaderWrapper>
        <HeaderContent>
          <Box>
            <HeaderLink to="/">
              Scratch
            </HeaderLink>
          </Box>
          <NavBar justify="flex-end">
            <NavLinksWrapper justifyContent="center">
              {isAuthenticated ? (
                <Box>
                  <HeaderLink to="#" onClick={handleLogut}>Logout</HeaderLink>
                </Box>
              )
                : (
                  <>
                    <Box>
                      <HeaderLink to="/signup">SignUp</HeaderLink>
                    </Box>
                    <Box>
                      <HeaderLink to="/login">Login</HeaderLink>
                    </Box>
                  </>
                )}
            </NavLinksWrapper>
          </NavBar>
        </HeaderContent>
      </HeaderWrapper>
      <Main>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </Main>
    </LayoutWrapper>
    )
  );
}

export default App;
