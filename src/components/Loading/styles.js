import styled from 'styled-components';
import { BLACK3 } from '@components/style/colors';

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: ${BLACK3};
  z-index: 100;
  > div {
    width: 83px;
    height: 83px;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { LoadingContainer };
