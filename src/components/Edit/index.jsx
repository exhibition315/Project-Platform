import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import useSWR from 'swr';
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
import { getValueByKey } from '@utils/utils';
import { api, fetcher } from '@api';
import { MainSection, TopContainer, FooterContainer } from './styles';

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data } = useSWR(id ? [api.getProjectDetail, id] : null, (url) => fetcher.getWithParam(url, id));

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

  useEffect(() => {
    if (data) {
      const { cover, projectType, cc, projectName, tag, vision, description } = data;
      reset({
        cover,
        projectType: {
          value: projectType,
          label: getValueByKey(projectType, PROJECT_TYPES),
        },
        cc: {
          value: cc,
          label: getValueByKey(cc, CC_TYPES),
        },
        projectName,
        tag: Array(6)
          .fill({})
          .map((t, index) => {
            const key = `0${index}`;
            const checked = tag.includes(key);
            return {
              key,
              checked,
            };
          }),
        vision,
        description,
      });
    }
  }, [data]);

  const onSubmit = (d) => {
    console.log(d);
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
                <PickerInput placeholder="?????????" options={getOptions(PROJECT_TYPES)} field={field} />
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
                title="??????CC"
                linkContent="(????????????)"
                link="http://creativecommons.tw/explore"
                placeholder="?????????"
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
            render={({ field }) => <SingleTextInput title="????????????" margin="0 0 36px 0" field={field} />}
          />
          <TagSelector control={control} title="????????????" options={getOptions(TAG_TYPES)} margin="0 0 36px 0" />
          <Controller
            name="vision"
            control={control}
            render={({ field }) => (
              <MultiTextInput
                title="?????????"
                description="?????????????????????????????????????????????????????????"
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
                title="????????????"
                description="?????????????????????????????????????????????????????????"
                isRequired={false}
                margin="0 0 92px 0"
                height={256}
                field={field}
              />
            )}
          />
          <FooterContainer>
            <button type="button" onClick={onReset}>
              ??????
            </button>
            <button type="submit">??????</button>
          </FooterContainer>
        </form>
      </MainSection>
    </MainContainer>
  );
};

export default Edit;
