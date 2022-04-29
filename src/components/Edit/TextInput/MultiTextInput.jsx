import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Title, Required, Description } from '@components/Edit/styles';
import { MultiTextInputContainer } from './styles';

const MultiTextInput = forwardRef(
  ({ field, title, description, placeholder, linkContent, link, isRequired, margin, height }, ref) => (
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
      <MultiTextInputContainer ref={ref} placeholder={placeholder} height={height} {...field} />
      {description && <Description>{description}</Description>}
    </InputContainer>
  ),
);

MultiTextInput.propTypes = {
  field: PropTypes.object,
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
  field: {},
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
