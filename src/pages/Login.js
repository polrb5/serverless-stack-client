import { useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

import { useHistory } from 'react-router-dom';
import { useAppContext } from '../libs/contextLib';
import onError from '../libs/errorLib';

import { Box, Flex } from '../components/ui';

const ContainerWrapper = styled(Flex)`
  min-height: calc(100vh - 84px);
  width: 100%;
`;

const FormStyled = styled.form`
  width: 300px;
`;

const FormWrapper = styled(Flex)`
  gap: 1.5em;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  padding: 0 5px;
  border-radius: 7px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #111;
  color: #fff;
  font-size: 16px;
  border-radius: 7px;
  cursor: pointer;
`;

const LoadingBox = styled(Box)`
  height: 20px;
  margin-bottom: 15px;
`;

const Login = () => {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      history.push('/');
    } catch (error) {
      onError(error);
      setIsLoading(false);
    }
  };

  return (
    <ContainerWrapper justifyContent="center">
      <FormStyled onSubmit={handleSubmit}>
        <FormWrapper flexDirection="column">
          <Box width="100%">
            <div>Email</div>
            <InputStyled type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Box>
          <Box width="100%">
            <div>Password</div>
            <InputStyled type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Box>
          <Box width="100%">
            <LoadingBox>
              {isLoading && <div>Loading...</div>}
            </LoadingBox>
            <Button type="submit">Login</Button>
          </Box>
        </FormWrapper>
      </FormStyled>
    </ContainerWrapper>
  );
};

export default Login;
