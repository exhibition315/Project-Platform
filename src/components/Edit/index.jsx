import React from 'react';
import Header from '@components/Header';
import Picker from '@components/Edit/Picker';
import TextInput from '@components/Edit/TextInput';
import MultiTextInput from '@components/Edit/MultiTextInput';
import TagSelector from '@components/Edit/TagSelector';
import { PROJECT_TYPES, CC_TYPES } from '@common/constants';
import { MainContainer } from '@components/style';
import { MainSection, TopContainer, CoverContainer, CoverContent, Cover, FooterContainer } from './styles';

const Edit = () => (
  <MainContainer>
    <Header />
    <MainSection>
      <TopContainer>
        <Picker placeholder="請選擇" options={PROJECT_TYPES} margin="0 30px 60px 0" />
        <CoverContainer>
          <CoverContent>
            <Cover />
            <p>+新增圖片</p>
          </CoverContent>
          <p>視覺或示意圖</p>
          <p>(建議 寬670 x 高502 JPG、PNG)</p>
        </CoverContainer>
      </TopContainer>
      <Picker
        title="創用CC"
        linkContent="(版權說明)"
        link="http://creativecommons.tw/explore"
        placeholder="請選擇"
        options={CC_TYPES}
        margin="0 0 36px 0"
      />
      <TextInput title="專案名稱" margin="0 0 36px 0" />
      <TagSelector margin="0 0 36px 0" />
      <MultiTextInput
        title="視覺稿"
        description="附上視覺稿連結，方便工程師了解詳細視覺"
        isRequired={false}
        margin="0 0 36px 0"
      />
      <MultiTextInput
        title="專案說明"
        description="詳細說明專案，讓工程師更了解專案內容。"
        isRequired={false}
        margin="0 0 92px 0"
        height={256}
      />
      <FooterContainer>
        <button type="button">取消</button>
        <button type="button">發布</button>
      </FooterContainer>
    </MainSection>
  </MainContainer>
);

export default Edit;
