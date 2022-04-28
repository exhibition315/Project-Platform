import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';
import { GRAY4, GRAY7 } from '@components/style/colors';

const TextInput = styled.textarea`
  width: 100%;
  ${layout};
  font-size: 16px;
  color: ${GRAY4};
  padding: 16px 20px;
  background-color: ${GRAY7};
  border-radius: 8px;
  resize: none;
`;

TextInput.propTypes = {
  height: PropTypes.number,
};

TextInput.defaultProps = {
  height: 104,
};

// eslint-disable-next-line import/prefer-default-export
export { TextInput };
