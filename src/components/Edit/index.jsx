import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '@components/Header';
import ImagePicker from '@components/Edit/Input/ImagePicker';
import PickerInput from '@components/Edit/Input/PickerInput';
import SingleTextInput from '@components/Edit/Input/SingleTextInput';
import MultiTextInput from '@components/Edit/Input/MultiTextInput';
import TagSelector from '@components/Edit/Input/TagSelector';
import { PROJECT_TYPES, CC_TYPES, TAG_TYPES } from '@common/constants';
import { MainContainer } from '@components/style';
import { editSchema } from '@utils/validation';
import { MainSection, TopContainer, FooterContainer } from './styles';

const Edit = () => {
  const history = useHistory();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      cover: undefined,
      projectType: '',
      cc: '',
      projectName: '',
      tag: Object.keys(TAG_TYPES).map((key) => ({
        value: TAG_TYPES[key].key,
        checked: false,
      })),
      vision: '',
      description: '',
    },
    resolver: yupResolver(editSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    history.push('/');
  };

  const onReset = () => {
    reset();
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
              rules={{ required: true }}
              render={({ field }) => (
                <PickerInput
                  placeholder="請選擇"
                  options={getOptions(PROJECT_TYPES)}
                  margin="0 30px 60px 0"
                  field={field}
                />
              )}
            />
            <Controller name="cover" control={control} render={({ field }) => <ImagePicker field={field} />} />
          </TopContainer>
          <Controller
            name="cc"
            control={control}
            rules={{ required: true }}
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
            rules={{ required: true }}
            render={({ field }) => <SingleTextInput title="專案名稱" margin="0 0 36px 0" field={field} />}
          />
          <TagSelector control={control} title="專案分類" options={getOptions(TAG_TYPES)} margin="0 0 36px 0" />
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
            <button type="button" onClick={onReset}>
              取消
            </button>
            <button type="submit">發布</button>
          </FooterContainer>
        </form>
      </MainSection>
    </MainContainer>
  );
};

export default Edit;
