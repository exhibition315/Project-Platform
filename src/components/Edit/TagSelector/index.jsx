import React from 'react';
import PropTypes from 'prop-types';
import { TAG_TYPES } from '@common/constants';
import { Title } from '@components/Edit/styles';
import { TagSelectorContainer, TagContentContainer, SelectorContainer, Square } from './styles';

const TagSelector = ({ margin }) => (
  <TagSelectorContainer margin={margin}>
    <Title>專案分類</Title>
    <TagContentContainer>
      {Object.keys(TAG_TYPES).map((key) => {
        const tag = TAG_TYPES[key];
        return (
          <SelectorContainer key={tag.key}>
            <Square />
            <p>{tag.value}</p>
          </SelectorContainer>
        );
      })}
    </TagContentContainer>
  </TagSelectorContainer>
);

TagSelector.propTypes = {
  margin: PropTypes.string,
};

TagSelector.defaultProps = {
  margin: '',
};

export default TagSelector;
