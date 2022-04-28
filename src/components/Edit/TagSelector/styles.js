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

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${GRAY4};
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: ${GRAY7};
  border-radius: 4px;
  margin-right: 8px;
  ::after {
    content: '';
    width: 14px;
    height: 14px;
    background-color: ${GRAY4};
    border-radius: 2px;
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

export { TagSelectorContainer, TagContentContainer, SelectorContainer, Square };
