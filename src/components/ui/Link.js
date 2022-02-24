import styled from 'styled-components';
import {
  layout,
  color,
  typography,
  space,
} from 'styled-system';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.primary}
  ${typography}
  ${color}
  ${layout}
  ${space}
`;

export default LinkStyled;
