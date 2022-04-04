import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const backgroundImgSetting = (width, height, position, size = 'cover') => css`
  width: ${width};
  height: ${height};
  background-position: ${position};
  background-size: ${size};
  background-repeat: no-repeat;
`;
