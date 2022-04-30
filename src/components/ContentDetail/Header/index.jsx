import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar } from '@components/Header/Editor/styles';
import { HeaderContainer, AuthorContainer, AuthorButton } from './styles';

const Header = ({ id, author, date }) => {
  const history = useHistory();

  const onEdit = () => {
    history.push(`/edit/${id}`);
  };

  return (
    <HeaderContainer>
      <div>
        <Avatar />
        <AuthorContainer>
          <p>{author}</p>
          <p>{date}</p>
        </AuthorContainer>
      </div>
      <div>
        <AuthorButton onClick={onEdit}>編輯</AuthorButton>
        <AuthorButton>刪除</AuthorButton>
      </div>
    </HeaderContainer>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string,
};

Header.defaultProps = {
  author: '',
  date: '',
};

export default Header;
