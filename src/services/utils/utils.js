import * as R from 'ramda';
import { BREAK_POINTS } from '@common/constants';

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const isDesktop = () => {
  const { width } = getWindowDimensions();
  return width > BREAK_POINTS.tablet;
};

export const isTablet = () => {
  const { width } = getWindowDimensions();
  return width > BREAK_POINTS.mobile && width <= BREAK_POINTS.tablet;
};

export const isMobile = () => {
  const { width } = getWindowDimensions();
  return width <= BREAK_POINTS.mobile;
};

export const getValueByKey = (key, types) => R.prop('value', R.find(R.propEq('key', key))(R.values(types)));
