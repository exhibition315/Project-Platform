import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { CardContainer, Avatar, Thumbnail } from './styles';

const Card = ({ id, author, avatar, title, preview, thumbnail }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/view/${id}`);
  };

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
  id: PropTypes.string.isRequired,
  author: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  preview: PropTypes.string,
  thumbnail: PropTypes.string,
};

Card.defaultProps = {
  author: '',
  avatar: '',
  title: '',
  preview: '',
  thumbnail: '',
};

export default Card;
