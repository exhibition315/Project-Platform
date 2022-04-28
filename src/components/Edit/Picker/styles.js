import styled from 'styled-components';
import arrowIcon from '@img/arrow-icon.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { Input } from '@components/Edit/styles';
import { WHITE, GRAY4, BLACK4 } from '@components/style/colors';

const SelectPanel = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 52px;
  left: 0;
  right: 0;
  padding: 16px;
  font-size: 14px;
  color: ${GRAY4};
  background-color: ${WHITE};
  border-radius: 8px;
  box-shadow: 0px 4px 4px ${BLACK4};
  z-index: 10;
  > button {
    margin-bottom: 16px;
    text-align: left;
    background-color: ${WHITE};
    cursor: pointer;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const PickerInput = styled(Input).attrs(() => ({
  type: 'text',
  readOnly: true,
}))`
  cursor: pointer;
`;

const PickerIcon = styled.div`
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${arrowIcon});
  ${backgroundImgSetting('12px', '11px', 'center', 'contain')};
`;

export { PickerInput, PickerIcon, SelectPanel };
