import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Title, Required, Description } from './styles';

const BaseInput = ({ renderInput, title, description, linkContent, link, isRequired, margin, containerStyle }) => (
  <InputContainer margin={margin} containerStyle={containerStyle}>
    <div>
      {title && (
        <Title>
          {title}
          <a href={link} target="_blank" rel="noreferrer">
            {linkContent}
          </a>
        </Title>
      )}
      {isRequired && <Required>*必填</Required>}
    </div>
    {renderInput && renderInput()}
    {description && <Description>{description}</Description>}
  </InputContainer>
);

BaseInput.propTypes = {
  renderInput: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  linkContent: PropTypes.string,
  link: PropTypes.string,
  isRequired: PropTypes.bool,
  margin: PropTypes.string,
  containerStyle: PropTypes.array,
};

BaseInput.defaultProps = {
  title: '',
  description: '',
  linkContent: '',
  link: '',
  isRequired: true,
  margin: '',
  containerStyle: [],
};

export default BaseInput;
