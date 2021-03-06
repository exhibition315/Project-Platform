import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import BaseInput from './BaseInput';
import { PickerStyles, PickerIcon, PickerRwdStyle } from './styles';

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <PickerIcon />
  </components.DropdownIndicator>
);

const PickerInput = forwardRef(
  ({ options, title, description, placeholder, linkContent, link, isRequired, margin, field }, ref) => {
    const renderInput = () => (
      <Select
        ref={ref}
        placeholder={placeholder}
        components={{ DropdownIndicator }}
        isSearchable={false}
        styles={PickerStyles}
        options={options}
        {...field}
      />
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
        containerStyle={PickerRwdStyle}
      />
    );
  },
);

PickerInput.propTypes = {
  options: PropTypes.array,
  field: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  linkContent: PropTypes.string,
  link: PropTypes.string,
  isRequired: PropTypes.bool,
  margin: PropTypes.string,
};

PickerInput.defaultProps = {
  options: [],
  title: '',
  description: '',
  placeholder: '',
  linkContent: '',
  link: '',
  isRequired: true,
  margin: '',
};

export default PickerInput;
