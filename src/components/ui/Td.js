import styled from 'styled-components';
import {
  layout,
  color,
  typography,
} from 'styled-system';

const Td = styled.td`
  ${color}
  ${typography}
  ${layout}
  padding: 10px 0px;
  vertical-align: middle;
`;

export default Td;
