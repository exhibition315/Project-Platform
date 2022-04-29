import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { InputContainer, Title, Required, Description } from '@components/Edit/styles';
import { PickerStyle, PickerIcon } from './styles';

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <PickerIcon />
  </components.DropdownIndicator>
);

const Picker = forwardRef(
  ({ options, title, description, placeholder, linkContent, link, isRequired, margin, field }, ref) => (
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
      <Select
        ref={ref}
        placeholder={placeholder}
        components={{ DropdownIndicator }}
        isSearchable={false}
        styles={PickerStyle}
        options={options}
        {...field}
      />
      {description && <Description>{description}</Description>}
    </InputContainer>
  ),
);

Picker.propTypes = {
  options: PropTypes.array,
  field: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  linkContent: PropTypes.string,
  link: PropTypes.string,
  isRequired: PropTypes.bool,
  margin: PropTypes.string,
};

Picker.defaultProps = {
  title: '',
  options: [],
  field: {},
  description: '',
  placeholder: '',
  linkContent: '',
  link: '',
  isRequired: true,
  margin: '',
};

export default Picker;
