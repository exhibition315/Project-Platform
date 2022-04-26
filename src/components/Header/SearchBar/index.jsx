import React from 'react';
import { SearchContainer, SearchInput, SearchButton } from './styles';

const SearchBar = () => {
  const onSearchClick = () => {};

  return (
    <SearchContainer>
      <SearchInput placeholder="搜尋視覺或專案" />
      <SearchButton onClick={onSearchClick} />
    </SearchContainer>
  );
};

export default SearchBar;
