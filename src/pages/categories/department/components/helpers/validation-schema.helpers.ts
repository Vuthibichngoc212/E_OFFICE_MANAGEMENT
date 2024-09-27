import * as Yup from 'yup';

export const departmentsSchema = Yup.object().shape({
	name: Yup.string().required('Loại văn bản không được để trống'),
	parent_department_id: Yup.string().required('parent_department_idkhông được để trống')
});
