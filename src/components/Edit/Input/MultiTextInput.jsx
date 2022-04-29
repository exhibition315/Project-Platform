import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';
import { MultiTextInputContainer } from './styles';

const MultiTextInput = forwardRef(
  ({ field, title, description, placeholder, linkContent, link, isRequired, margin, height }, ref) => {
    const renderInput = () => (
      <MultiTextInputContainer ref={ref} placeholder={placeholder} height={height} autoComplete="off" {...field} />
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

MultiTextInput.propTypes = {
  field: PropTypes.object.isRequired,
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
