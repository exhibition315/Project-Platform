import React from 'react';
import SearchBar from '@components/Header/SearchBar';
import Editor from '@components/Header/Editor';
import { HeaderContainer, HeaderTitleImg } from './styles';

const Header = () => (
  <HeaderContainer>
    <HeaderTitleImg />
    <SearchBar />
    <Editor />
  </HeaderContainer>
);

export default Header;
