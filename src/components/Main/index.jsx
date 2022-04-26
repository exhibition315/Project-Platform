import React from 'react';
import { useSelector } from 'react-redux';
import Header from '@components/Main/Header';
import Filter from '@components/Main/Filter';
import Card from '@components/Main/Card';
import Pagination from '@components/Main/Pagination';
import Loading from '@components/Loading';
import { CONTENT_PER_PAGE } from '@common/constants';
import useGetProjects from '@hooks/useGetProjects';
import { MainContainer, MainSection, ContentContainer, Footer } from './styles';

const Main = () => {
  const { project: projectType, filter: filterType, currentPage } = useSelector((state) => state.main);
  const { content } = useGetProjects();

  return (
    <MainContainer>
      <Header />
      {content && content.length > 0 && (
        <MainSection>
          <Filter />
          <ContentContainer>
            {content.map((project) => {
              const { projectKey, author, avatar, title, preview, thumbnail } = project;
              return (
                <Card
                  key={`${projectKey}_${projectType}_${filterType}_${currentPage}`}
                  author={author}
                  avatar={avatar}
                  title={title}
                  preview={preview}
                  thumbnail={thumbnail}
                />
              );
            })}
          </ContentContainer>
          <Pagination totalContent={20} contentPerPage={CONTENT_PER_PAGE} />
        </MainSection>
      )}
      <Footer>Idea Share © Code: Samick & Michael / Design: KT</Footer>
      <Loading visible={content.length === 0} />
    </MainContainer>
  );
};

export default Main;
