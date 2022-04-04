import React from 'react';
import { EditContainer, EditButton, Avatar } from './styles';

const Editor = () => {
  const onEditClick = () => {};

  const onAvatarClick = () => {};

  return (
    <EditContainer>
      <EditButton onClick={onEditClick}>投稿 / 提案</EditButton>
      <Avatar onClick={onAvatarClick} />
    </EditContainer>
  );
};

export default Editor;
