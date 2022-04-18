import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, Avatar, Thumbnail } from './styles';

const Card = ({ author = '', avatar, title = '', preview = '', thumbnail }) => {
  const onClick = () => {};

  return (
    <CardContainer onClick={onClick}>
      <div>
        <Avatar avatar={avatar} author={author} />
        <p>{title}</p>
        <p>{preview}</p>
      </div>
      <Thumbnail thumbnail={thumbnail} />
    </CardContainer>
  );
};

Card.propTypes = {
  author: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  preview: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Card;
