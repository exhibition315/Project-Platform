import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@components/Edit/styles';
import { TagSelectorContainer, TagContentContainer, LabelContainer } from './styles';

const TagSelector = ({ register, title, options, margin }) => (
  <TagSelectorContainer margin={margin}>
    <Title>{title}</Title>
    <TagContentContainer>
      {options.map((option, index) => {
        const { value, label } = option;
        const key = `check-input-${value}`;
        return (
          <LabelContainer key={key} htmlFor={key}>
            <input id={key} type="checkbox" value={value} {...register(`tag[${index}]`)} />
            {label}
          </LabelContainer>
        );
      })}
    </TagContentContainer>
  </TagSelectorContainer>
);

TagSelector.propTypes = {
  register: PropTypes.func.isRequired,
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
