import * as Yup from 'yup';

export const documanetTypeSchema = Yup.object().shape({
	name: Yup.string().required('Loại văn bản không được để trống'),
	description: Yup.string().required('Mô tả không được để trống')
});
