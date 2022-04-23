import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { api, fetcher } from '@api';
import Header from '@components/Main/Header';
import Filter from '@components/Main/Filter';
import Card from '@components/Main/Card';
import Pagination from '@components/Main/Pagination';
import Loading from '@components/Loading';
import { MainContainer, MainSection, ContentContainer, Footer } from './styles';

const Main = () => {
  const { project: projectType, filter: filterType } = useSelector((state) => state.main);
  const { data } = useSWR([api.getProjects, projectType, filterType], (url) =>
    fetcher.get(url, { projectType, filterType }));

  return (
    <MainContainer>
      <Header />
      <MainSection>
        <Filter />
        <ContentContainer>
          {data
            && data.map((project) => {
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
      <Loading visible={!data} />
    </MainContainer>
  );
};

export default Main;
