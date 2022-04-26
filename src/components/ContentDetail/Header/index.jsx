import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@components/Header/Editor/styles';
import { HeaderContainer, AuthorContainer, AuthorButton } from './styles';

const Header = ({ author, date }) => (
  <HeaderContainer>
    <div>
      <Avatar />
      <AuthorContainer>
        <p>{author}</p>
        <p>{date}</p>
      </AuthorContainer>
    </div>
    <div>
      <AuthorButton>編輯</AuthorButton>
      <AuthorButton>刪除</AuthorButton>
    </div>
  </HeaderContainer>
);

Header.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
};

Header.defaultProps = {
  author: '',
  date: '',
};

export default Header;
