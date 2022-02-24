import styled from 'styled-components';
import { Flex } from './ui';

const ContainerWrapper = styled(Flex)`
  min-height: calc(100vh - 84px);
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Home = () => (
  <ContainerWrapper justifyContent="center">
    <Title>Notes App</Title>
  </ContainerWrapper>
);

export default Home;
