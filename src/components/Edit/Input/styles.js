import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';
import arrowIcon from '@img/arrow-icon.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { GRAY4, GRAY7 } from '@components/style/colors';

const Input = styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  color: ${GRAY4};
  padding: 16px 20px;
  background-color: ${GRAY7};
  border-radius: 8px;
`;

const PickerStyles = {
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

const SingleTextInputContainer = styled(Input).attrs(() => ({
  type: 'text',
}))``;

const MultiTextInputContainer = styled.textarea`
  width: 100%;
  ${layout};
  font-size: 16px;
  color: ${GRAY4};
  padding: 16px 20px;
  background-color: ${GRAY7};
  border-radius: 8px;
  resize: none;
`;

MultiTextInputContainer.propTypes = {
  height: PropTypes.number,
};

MultiTextInputContainer.defaultProps = {
  height: 104,
};

export { PickerStyles, PickerIcon, SingleTextInputContainer, MultiTextInputContainer };
