import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, space } from 'styled-system';
import arrowIcon from '@img/arrow-icon.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { GRAY4, GRAY6, GRAY7, BLUE1, RED1 } from '@components/style/colors';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${space};
  > div {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  color: ${GRAY4};
  margin-right: 4px;
  > a {
    font-size: 14px;
    color: ${BLUE1};
    margin-left: 10px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Required = styled.p`
  font-size: 14px;
  color: ${RED1};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${GRAY6};
  margin-top: 6px;
`;

const SingleTextInputContainer = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
  height: 52px;
  font-size: 16px;
  color: ${GRAY4};
  padding: 16px 20px;
  background-color: ${GRAY7};
  border-radius: 8px;
`;

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

export {
  InputContainer,
  Title,
  Required,
  Description,
  PickerStyles,
  PickerIcon,
  SingleTextInputContainer,
  MultiTextInputContainer,
  TagSelectorContainer,
  TagContentContainer,
  LabelContainer,
};
