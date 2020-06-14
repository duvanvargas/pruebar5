import * as Yup from 'yup';

export const ReviewSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  review: Yup.string().required('Required'),
});