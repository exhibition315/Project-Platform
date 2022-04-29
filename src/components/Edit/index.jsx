import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Header from '@components/Header';
import PickerInput from '@components/Edit/Input/PickerInput';
import SingleTextInput from '@components/Edit/Input/SingleTextInput';
import MultiTextInput from '@components/Edit/Input/MultiTextInput';
import TagSelector from '@components/Edit/TagSelector';
import { PROJECT_TYPES, CC_TYPES } from '@common/constants';
import { MainContainer } from '@components/style';
import { MainSection, TopContainer, CoverContainer, CoverContent, Cover, FooterContainer } from './styles';

const Edit = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      projectType: '',
      cc: '',
      projectName: '',
      tag: '',
      vision: '',
      description: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const getOptions = (types) =>
    Object.keys(types).map((key) => {
      const item = types[key];
      return {
        value: item.key,
        label: item.value,
      };
    });

  return (
    <MainContainer>
      <Header />
      <MainSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TopContainer>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                <PickerInput
                  placeholder="請選擇"
                  options={getOptions(PROJECT_TYPES)}
                  margin="0 30px 60px 0"
                  field={field}
                />
              )}
            />
            <CoverContainer>
              <CoverContent>
                <Cover />
                <p>+新增圖片</p>
              </CoverContent>
              <p>視覺或示意圖</p>
              <p>(建議 寬670 x 高502 JPG、PNG)</p>
            </CoverContainer>
          </TopContainer>
          <Controller
            name="cc"
            control={control}
            render={({ field }) => (
              <PickerInput
                title="創用CC"
                linkContent="(版權說明)"
                link="http://creativecommons.tw/explore"
                placeholder="請選擇"
                options={getOptions(CC_TYPES)}
                margin="0 0 36px 0"
                field={field}
              />
            )}
          />
          <Controller
            name="projectName"
            control={control}
            render={({ field }) => <SingleTextInput title="專案名稱" margin="0 0 36px 0" field={field} />}
          />
          <TagSelector margin="0 0 36px 0" />
          <Controller
            name="vision"
            control={control}
            render={({ field }) => (
              <MultiTextInput
                title="視覺稿"
                description="附上視覺稿連結，方便工程師了解詳細視覺"
                isRequired={false}
                margin="0 0 36px 0"
                field={field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <MultiTextInput
                title="專案說明"
                description="詳細說明專案，讓工程師更了解專案內容。"
                isRequired={false}
                margin="0 0 92px 0"
                height={256}
                field={field}
              />
            )}
          />
          <FooterContainer>
            <button type="button">取消</button>
            <button type="submit">發布</button>
          </FooterContainer>
        </form>
      </MainSection>
    </MainContainer>
  );
};

export default Edit;
