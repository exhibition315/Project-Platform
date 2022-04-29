import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { layout, space } from 'styled-system';
import arrowIcon from '@img/arrow-icon.svg';
import editCover from '@img/edit-cover.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { WHITE, GRAY1, GRAY4, GRAY6, GRAY7, GRAY8, BLUE1, RED1 } from '@components/style/colors';

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
  ${(props) => props.containerStyle};
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

const PickerRwdStyle = css`
  margin: 0 30px 60px 0;
  ${({ theme }) => theme.mobile`
      margin: 0 0 36px 0;
  `};
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

const TagSelectorContainer = styled.div`
  ${space};
`;

const TagContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  ${({ theme }) => theme.mobile`
      row-gap: 24px;
  `};
`;

const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${GRAY4};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
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
  ${({ theme }) => theme.mobile`
      flex: 0 1 33%;
  `};
`;

const CoverContainer = styled.div`
  font-size: 14px;
  color: ${RED1};
  ${({ theme }) => theme.mobile`
      display: flex;
      align-items: flex-end;
      margin-bottom: 22px;
  `};
`;

const CoverContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 192px;
  min-width: 192px;
  min-height: 192px;
  border-radius: 12px;
  ${({ theme }) => theme.mobile`
      margin-right: 8px;
  `};
  ${(props) => {
    if (props.bgImage) {
      return css`
        background-image: url(${props.bgImage});
        ${backgroundImgSetting('192px', '192px', 'center', 'cover')};
      `;
    }
    return css`
      background-color: ${GRAY1};
    `;
  }}
  > label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    > input {
      display: none;
    }
  }
  > p {
    font-size: 16px;
    color: ${GRAY6};
    margin-top: 16px;
    text-decoration: underline;
  }
  > button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${GRAY8};
    font-size: 16px;
    color: ${WHITE};
    cursor: pointer;
  }
`;

const Cover = styled.div`
  background-image: url(${editCover});
  ${backgroundImgSetting('64px', '60px', 'center', 'contain')};
`;

const CoverHint = styled.div``;

export {
  InputContainer,
  Title,
  Required,
  Description,
  PickerRwdStyle,
  PickerStyles,
  PickerIcon,
  SingleTextInputContainer,
  MultiTextInputContainer,
  TagSelectorContainer,
  TagContentContainer,
  LabelContainer,
  CoverContainer,
  CoverContent,
  Cover,
  CoverHint,
};
