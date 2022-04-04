import styled from 'styled-components';
import { White, Gray1, Gray4 } from '@components/style/colors';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${Gray1};
`;

const BaseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Gray4};
  border-radius: 12px;
  font-size: 14px;
  color: ${White};
  cursor: pointer;
`;

export { MainContainer, BaseButton };
