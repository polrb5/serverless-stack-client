import styled from 'styled-components';

import Header from './Header';

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  min-height: 100vh;
`;

const MainLayout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Main>
      {children}
    </Main>
  </LayoutWrapper>
);

export default MainLayout;
