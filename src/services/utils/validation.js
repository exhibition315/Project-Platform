import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const editSchema = yup
  .object({
    cover: yup.mixed().nullable(),
    projectType: yup
      .object({
        value: yup.string().required(),
        label: yup.string().required(),
      })
      .required(),
    cc: yup
      .object({
        value: yup.string().required(),
        label: yup.string().required(),
      })
      .required(),
    projectName: yup.string().required(),
    tag: yup.array(),
    vision: yup.string(),
    description: yup.string(),
  })
  .required();
