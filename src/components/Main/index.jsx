import React, { useState, useEffect } from 'react';
import Header from '@components/Main/Header';
import Filter from '@components/Main/Filter';
import Card from '@components/Main/Card';
import apis from '@api';
import { MainContainer, MainSection, ContentContainer } from './styles';

const Main = () => {
  const [projects, setProjectrs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apis.getProjects();
        setProjectrs(result.content);
      } catch (e) {
        console.log('API error in getProjects:', e);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <Header />
      <MainSection>
        <Filter />
        <ContentContainer>
          {projects.map((project) => {
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
      </MainSection>
    </MainContainer>
  );
};

export default Main;
