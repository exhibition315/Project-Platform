import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { api, fetcher } from '@api';
import Header from '@components/Main/Header';
import Filter from '@components/Main/Filter';
import Card from '@components/Main/Card';
import Pagination from '@components/Main/Pagination';
import Loading from '@components/Loading';
import { CONTENT_PER_PAGE } from '@common/constants';
import { MainContainer, MainSection, ContentContainer, Footer } from './styles';

const Main = () => {
  const { project: projectType, filter: filterType, currentPage } = useSelector((state) => state.main);
  const { data } = useSWR([api.getProjects, currentPage, projectType, filterType], (url) =>
    fetcher.get(url, { currentPage, projectType, filterType }));

  return (
    <MainContainer>
      <Header />
      {data && (
        <MainSection>
          <Filter />
          <ContentContainer>
            {data.contents.map((project) => {
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
          <Pagination totalContent={data.totalCnt} contentPerPage={CONTENT_PER_PAGE} />
        </MainSection>
      )}
      <Footer>Idea Share © Code: Samick & Michael / Design: KT</Footer>
      <Loading visible={!data} />
    </MainContainer>
  );
};

export default Main;
