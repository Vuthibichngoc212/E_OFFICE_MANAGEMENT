import * as Yup from 'yup';

export const issuersSchema = Yup.object().shape({
	name: Yup.string().required('Nơi ban hành không được để trống'),
	code: Yup.string().required('Mã nơi ban hành không được để trống'),
	abbreviation: Yup.string().required('Tên viết tắt không được để trống'),
	description: Yup.string().required('Mô tả không được để trống')
});
