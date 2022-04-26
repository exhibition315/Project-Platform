import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '@components/Header/SearchBar';
import Editor from '@components/Header/Editor';
import { HeaderContainer, HeaderTitleImg } from './styles';

const Header = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/');
  };

  return (
    <HeaderContainer>
      <HeaderTitleImg onClick={onClick} />
      <SearchBar />
      <Editor />
    </HeaderContainer>
  );
};

export default Header;
