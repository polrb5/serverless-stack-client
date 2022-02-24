import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Box, Flex } from '../ui';

const HeaderWrapper = styled.header`
  padding: 30px 7%;
  width: 100%;
  border-bottom: 1px solid black;
`;

const HeaderContent = styled(Flex)`
  margin: auto;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
`;

const HeaderLink = styled(NavLink)`
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

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Box>
        <HeaderLink to="/">
          Scratch
        </HeaderLink>
      </Box>
      <NavBar justify="flex-end">
        <NavLinksWrapper justifyContent="center">
          <Box>
            <HeaderLink to="/signup">SignUp</HeaderLink>
          </Box>
          <Box>
            <HeaderLink to="/login">Login</HeaderLink>
          </Box>
        </NavLinksWrapper>
      </NavBar>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
