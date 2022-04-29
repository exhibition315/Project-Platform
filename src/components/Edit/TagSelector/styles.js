import styled from 'styled-components';
import { space } from 'styled-system';
import { GRAY4, GRAY7 } from '@components/style/colors';

const TagSelectorContainer = styled.div`
  ${space};
`;

const TagContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${GRAY4};
  cursor: pointer;
  user-select: none;
  > input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    margin: 0 8px 0 0;
    appearance: none;
    background-color: ${GRAY7};
    border-radius: 4px;
    cursor: pointer;
    :checked::after {
      content: '';
      width: 14px;
      height: 14px;
      background-color: ${GRAY4};
      border-radius: 2px;
    }
  }
`;

export { TagSelectorContainer, TagContentContainer, LabelContainer };
