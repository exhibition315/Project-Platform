import { css } from 'styled-components';

const breakPoints = {
  desktop: 1280,
  tablet: 768,
  mobile: 360,
};

const backgroundImgSetting = (width, height, position, size = 'cover') => css`
  width: ${width};
  height: ${height};
  background-position: ${position};
  background-size: ${size};
  background-repeat: no-repeat;
`;

const media = Object.keys(breakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakPoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export { backgroundImgSetting, media };
