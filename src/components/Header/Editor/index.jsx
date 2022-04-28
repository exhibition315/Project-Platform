import React from 'react';
import { useHistory } from 'react-router-dom';
import { EditContainer, EditButton, Avatar } from './styles';

const Editor = () => {
  const history = useHistory();

  const onEditClick = () => {
    history.push('/edit');
  };

  return (
    <EditContainer>
      <EditButton onClick={onEditClick}>投稿 / 提案</EditButton>
      <Avatar />
    </EditContainer>
  );
};

export default Editor;
