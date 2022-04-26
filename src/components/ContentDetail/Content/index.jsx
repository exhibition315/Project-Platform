import React from 'react';
import PropTypes from 'prop-types';
import { TAG_TYPES } from '@common/constants';
import { getValueByKey } from '@utils/utils';
import {
  ContentContainer,
  AuthorizeContainer,
  AuthorizeIcon,
  ContentTitle,
  TagContainer,
  Footer,
  WatchIcon,
} from './styles';

const Content = ({ title, description, link, tags, watch }) => (
  <ContentContainer>
    <AuthorizeContainer>
      <AuthorizeIcon />
      <p>
        本著作係採用
        <a href="http://creativecommons.tw/explore" target="_blank" rel="noreferrer">
          創用 CC 姓名標示 3.0 台灣 授權條款
        </a>
        授權.
      </p>
    </AuthorizeContainer>
    <ContentTitle>{title}</ContentTitle>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noreferrer">
      {link}
    </a>
    <TagContainer>
      {tags.map((tag, index) => {
        const value = getValueByKey(tag, TAG_TYPES);
        return <p key={`tag_${index}`}>{value}</p>;
      })}
    </TagContainer>
    <Footer>
      <WatchIcon watchCount={watch} />
    </Footer>
  </ContentContainer>
);

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.array,
  watch: PropTypes.number,
};

Content.defaultProps = {
  title: '',
  description: '',
  link: '',
  tags: [],
  watch: 0,
};

export default Content;
