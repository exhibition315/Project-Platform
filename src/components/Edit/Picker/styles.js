import styled from 'styled-components';
import arrowIcon from '@img/arrow-icon.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { GRAY4, GRAY7 } from '@components/style/colors';

const PickerStyle = {
  control: () => ({
    width: '100%',
    height: 54,
    backgroundColor: GRAY7,
    borderRadius: 8,
  }),
  valueContainer: () => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 32px 0 22px',
  }),
  placeholder: () => ({
    fontSize: 16,
    color: GRAY4,
  }),
  indicatorSeparator: () => ({
    isDisabled: true,
  }),
};

const PickerIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${arrowIcon});
  ${backgroundImgSetting('12px', '11px', 'center', 'contain')};
`;

export { PickerStyle, PickerIcon };
