import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Title, Required, Description } from '@components/Edit/styles';
import { PickerInput, PickerIcon, SelectPanel } from './styles';

const Picker = ({ title, description, placeholder, linkContent, link, isRequired, options, margin }) => {
  const [selectVisible, setSelectVisible] = useState(false);

  const onInputClick = () => {
    setSelectVisible(!selectVisible);
  };

  const onSelect = () => {
    setSelectVisible(false);
  };

  return (
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
      <section>
        <PickerInput onClick={onInputClick} placeholder={placeholder} />
        <PickerIcon />
        {description && <Description>{description}</Description>}
        {selectVisible && (
          <SelectPanel>
            {Object.keys(options).map((key) => {
              const project = options[key];
              return (
                <button key={project.key} type="button" onClick={() => onSelect(project.key)}>
                  {project.value}
                </button>
              );
            })}
          </SelectPanel>
        )}
      </section>
    </InputContainer>
  );
};

Picker.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  linkContent: PropTypes.string,
  link: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.array,
  margin: PropTypes.string,
};

Picker.defaultProps = {
  title: '',
  description: '',
  placeholder: '',
  linkContent: '',
  link: '',
  isRequired: true,
  options: [],
  margin: '',
};

export default Picker;
