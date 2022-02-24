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

const BoxWrapper = styled.div`
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

const Box = ({
  justify, align, flex, order, children, ...rest
}) => (
  <BoxWrapper
    alignSelf={align}
    flex={flex}
    justifySelf={justify}
    order={order}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </BoxWrapper>
);

export default Box;
