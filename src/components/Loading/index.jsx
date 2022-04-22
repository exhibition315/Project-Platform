import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';
import loading from '../../../assets/animation/loading.json';
import { LoadingContainer } from './styles';

const Loading = ({ visible }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (visible) {
      lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: loading,
      });
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <LoadingContainer>
      <div ref={containerRef} />
    </LoadingContainer>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool,
};

Loading.defaultProps = {
  visible: false,
};

export default Loading;
