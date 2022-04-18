import styled from 'styled-components';
import { WHITE, GRAY4 } from '@components/style/colors';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 228px;
  height: 36px;
  background-color: ${WHITE};
  border-radius: 8px;
  font-size: 14px;
`;

const SwitchButton = styled.button`
  width: 114px;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  background-color:  ${(props) => (props.active ? GRAY4 : WHITE)};
  color: ${(props) => (props.active ? WHITE : GRAY4)};
`;

export { SwitchContainer, SwitchButton };
