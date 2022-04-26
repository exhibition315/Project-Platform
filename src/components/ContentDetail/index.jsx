import React from 'react';
import Header from '@components/Header';
import DetailHeader from '@components/ContentDetail/Header';
import Content from '@components/ContentDetail/Content';
import { MainContainer } from '@components/style';
import { MainSection, ContentImage } from './styles';

const ContentDetail = () => (
  <MainContainer>
    <Header />
    <MainSection>
      <DetailHeader />
      <ContentImage />
      <Content />
    </MainSection>
  </MainContainer>
);

export default ContentDetail;
