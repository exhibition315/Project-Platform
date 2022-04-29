import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Title, TagSelectorContainer, TagContentContainer, LabelContainer } from './styles';

const TagSelector = ({ control, title, options, margin }) => (
  <TagSelectorContainer margin={margin}>
    <Title>{title}</Title>
    <TagContentContainer>
      {options.map((option, index) => {
        const { value, label } = option;
        const key = `check-input-${value}`;
        return (
          <Controller
            key={key}
            name={`tag[${index}]`}
            control={control}
            render={({ field }) => {
              const { checked } = field.value;
              const onChange = (e) => {
                field.onChange({ value, checked: e.target.checked });
              };
              return (
                <LabelContainer htmlFor={key}>
                  <input id={key} type="checkbox" {...field} onChange={onChange} checked={checked} />
                  {label}
                </LabelContainer>
              );
            }}
          />
        );
      })}
    </TagContentContainer>
  </TagSelectorContainer>
);

TagSelector.propTypes = {
  control: PropTypes.object.isRequired,
  options: PropTypes.array,
  title: PropTypes.string,
  margin: PropTypes.string,
};

TagSelector.defaultProps = {
  options: [],
  title: '',
  margin: '',
};

export default TagSelector;
