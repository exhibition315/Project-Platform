import React from 'react';
import useSWR from 'swr';
import { api, fetcher } from '@api';
import Header from '@components/Main/Header';
import Filter from '@components/Main/Filter';
import Card from '@components/Main/Card';
import Pagination from '@components/Main/Pagination';
import Loading from '@components/Loading';
import { MainContainer, MainSection, ContentContainer, Footer } from './styles';

const Main = () => {
  const { data } = useSWR(api.getProjects, fetcher.get);

  if (!data) return <Loading />;

  return (
    <MainContainer>
      <Header />
      <MainSection>
        <Filter />
        <ContentContainer>
          {data && data.map((project) => {
            const { projectKey, author, avatar, title, preview, thumbnail } = project;
            return (
              <Card
                key={projectKey}
                author={author}
                avatar={avatar}
                title={title}
                preview={preview}
                thumbnail={thumbnail}
              />
            );
          })}
        </ContentContainer>
        <Pagination />
      </MainSection>
      <Footer>Idea Share © Code: Samick & Michael / Design: KT</Footer>
      <Loading />
    </MainContainer>
  );
};

export default Main;
