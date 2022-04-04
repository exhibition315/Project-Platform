import React from 'react';
import SearchBar from '@components/Main/Header/SearchBar';
import Editor from '@components/Main/Header/Editor';
import { HeaderContainer, HeaderTitleImg } from './styles';

const Header = () => (
  <HeaderContainer>
    <HeaderTitleImg />
    <SearchBar />
    <Editor />
  </HeaderContainer>
);

export default Header;
