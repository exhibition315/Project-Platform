import styled from 'styled-components';
import { WHITE, GRAY4 } from '@components/style/colors';

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

// eslint-disable-next-line import/prefer-default-export
export { BaseButton };
