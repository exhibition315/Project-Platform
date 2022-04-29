import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';
import { SingleTextInputContainer } from './styles';

const SingleTextInput = forwardRef(
  ({ field, title, description, placeholder, linkContent, link, isRequired, margin }, ref) => {
    const renderInput = () => (
      <SingleTextInputContainer ref={ref} placeholder={placeholder} autoComplete="off" {...field} />
    );
    return (
      <BaseInput
        renderInput={renderInput}
        title={title}
        description={description}
        linkContent={linkContent}
        link={link}
        isRequired={isRequired}
        margin={margin}
      />
    );
  },
);

SingleTextInput.propTypes = {
  field: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  linkContent: PropTypes.string,
  link: PropTypes.string,
  isRequired: PropTypes.bool,
  margin: PropTypes.string,
};

SingleTextInput.defaultProps = {
  title: '',
  description: '',
  placeholder: '',
  linkContent: '',
  link: '',
  isRequired: true,
  margin: '',
};

export default SingleTextInput;
