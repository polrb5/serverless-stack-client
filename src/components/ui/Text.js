import styled from 'styled-components';
import {
  layout,
  color,
  typography,
  space,
  variant,
} from 'styled-system';

const TextStyled = styled.span`
  font-family: 'Montserrat', sans-serif;
  text-decoration: ${({ textDecoration }) => textDecoration};
  ${typography}
  ${color}
  ${layout}
  ${space}
  ${variant({
    variants: {
      bold: {
        fontFamily: 'Overpass',
        fontWeight: '700',
      },
      link: {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
      small: {
        fontSize: '11px',
      },
      medium: {
        fontSize: '14px',
      },
    },
  })};
`;

const Text = ({ children, textDecoration = 'none', ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextStyled textDecoration={textDecoration} {...rest}>{children}</TextStyled>
);

export default Text;
