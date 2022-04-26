import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import Header from '@components/Header';
import DetailHeader from '@components/ContentDetail/Header';
import Content from '@components/ContentDetail/Content';
import { MainContainer } from '@components/style';
import { api, fetcher } from '@api';
import { MainSection, ContentImage } from './styles';

const ContentDetail = () => {
  const { id } = useParams();
  const { data } = useSWR([api.getProject, id], (url) => fetcher.getWithParam(url, id));

  return (
    <MainContainer>
      <Header />
      {data && (
        <MainSection>
          <DetailHeader author={data.author} date={data.date} />
          <ContentImage />
          <Content
            title={data.title}
            description={data.description}
            link={data.link}
            tags={data.tags}
            watch={data.watch}
          />
        </MainSection>
      )}
    </MainContainer>
  );
};

export default ContentDetail;
