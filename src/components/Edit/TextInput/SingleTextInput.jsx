import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Title, Required, Description } from '@components/Edit/styles';
import { SingleTextInputContainer } from './styles';

const SingleTextInput = forwardRef(
  ({ field, title, description, placeholder, linkContent, link, isRequired, margin }, ref) => (
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
      <SingleTextInputContainer ref={ref} placeholder={placeholder} {...field} />
      {description && <Description>{description}</Description>}
    </InputContainer>
  ),
);

SingleTextInput.propTypes = {
  field: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  linkContent: PropTypes.string,
  link: PropTypes.string,
  isRequired: PropTypes.bool,
  margin: PropTypes.string,
};

SingleTextInput.defaultProps = {
  field: {},
  title: '',
  description: '',
  placeholder: '',
  linkContent: '',
  link: '',
  isRequired: true,
  margin: '',
};

export default SingleTextInput;
