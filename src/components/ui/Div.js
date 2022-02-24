import styled from 'styled-components';
import {
  flexbox,
  layout,
  color,
  typography,
  space,
  border,
  shadow,
  position,
  compose,
} from 'styled-system';

const Div = styled.div`
  font-family: 'Montserrat', sans-serif;
  ${compose(
    layout,
    flexbox,
    space,
    color,
    typography,
    border,
    shadow,
    position,
  )}
`;

export default Div;
