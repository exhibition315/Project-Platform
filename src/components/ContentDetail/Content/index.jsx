import React from 'react';
import {
  ContentContainer,
  AuthorizeContainer,
  AuthorizeIcon,
  ContentTitle,
  TagContainer,
  Footer,
  WatchIcon,
} from './styles';

const tags = ['網頁', 'Android'];

const Content = () => (
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
    <ContentTitle>我的輕旅行</ContentTitle>
    <p>開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程；上傳照片，記錄美好的回憶。</p>
    <a
      href="https://www.figma.com/file/cuQhxmhzBXMOGysKvrTHmO/Hermes?node-id=567%3A3885"
      target="_blank"
      rel="noreferrer"
    >
      https://www.figma.com/file/cuQhxmhzBXMOGysKvrTHmO/Hermes?node-id=567%3A3885
    </a>
    <TagContainer>
      {tags.map((tag, index) => <p key={`tag_${index}`}>{tag}</p>)}
    </TagContainer>
    <Footer>
      <WatchIcon watchCount={20} />
    </Footer>
  </ContentContainer>
);

export default Content;
