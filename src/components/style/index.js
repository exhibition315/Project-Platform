import styled from 'styled-components';
import { WHITE, GRAY1, GRAY4 } from '@components/style/colors';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: ${GRAY1};
`;

const BaseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY4};
  border-radius: 12px;
  font-size: 14px;
  color: ${WHITE};
  cursor: pointer;
`;

export { MainContainer, BaseButton };
