import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';
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

export { SingleTextInputContainer, MultiTextInputContainer };
