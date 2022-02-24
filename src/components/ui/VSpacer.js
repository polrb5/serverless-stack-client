import styled from 'styled-components';
import {
  flexbox,
  layout,
  space,
  compose,
} from 'styled-system';

const VSpacer = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 1px;
  width: ${({ width = '20px' }) => width};
  ${compose(
    layout,
    flexbox,
    space,
  )}
`;

export default VSpacer;
