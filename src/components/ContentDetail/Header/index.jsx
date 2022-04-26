import React from 'react';
import { Avatar } from '@components/Header/Editor/styles';
import { HeaderContainer, AuthorContainer, AuthorButton } from './styles';

const Header = () => (
  <HeaderContainer>
    <div>
      <Avatar />
      <AuthorContainer>
        <p>Doris Wang</p>
        <p>2021/09/30</p>
      </AuthorContainer>
    </div>
    <div>
      <AuthorButton>編輯</AuthorButton>
      <AuthorButton>刪除</AuthorButton>
    </div>
  </HeaderContainer>
);

export default Header;
