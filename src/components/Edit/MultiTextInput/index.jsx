import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Title, Required, Description } from '@components/Edit/styles';
import { TextInput as Text } from './styles';

const MultiTextInput = ({ title, description, placeholder, linkContent, link, isRequired, margin, height }) => (
  <InputContainer margin={margin}>
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
    <Text placeholder={placeholder} height={height} />
    {description && <Description>{description}</Description>}
  </InputContainer>
);

MultiTextInput.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  linkContent: PropTypes.string,
  link: PropTypes.string,
  isRequired: PropTypes.bool,
  margin: PropTypes.string,
  height: PropTypes.number,
};

MultiTextInput.defaultProps = {
  title: '',
  description: '',
  placeholder: '',
  linkContent: '',
  link: '',
  isRequired: true,
  margin: '',
  height: 104,
};

export default MultiTextInput;
