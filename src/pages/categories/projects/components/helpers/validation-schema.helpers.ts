import * as Yup from 'yup';

export const issuersSchema = Yup.object().shape({
	name: Yup.string().required('Nơi ban hành không được để trống'),
	code: Yup.string().required('Mã nơi ban hành không được để trống'),
	project_manager_id: Yup.number().required('project_manager_id không được để trống'),
	description: Yup.string().required('Mô tả không được để trống'),
	start_date: Yup.date()
		.typeError('Ngày bắt đầu không hợp lệ')
		.nullable()
		.required('Ngày bắt đầu không được để trống'),
	end_date: Yup.date()
		.typeError('Ngày kết thúc không hợp lệ')
		.nullable()
		.required('Ngày kết thúc  không được để trống')
	// end_date: Yup.date()
	// 	.typeError('Ngày kết thúc không hợp lệ')
	// 	.nullable()
	// .when('start_date', {
	// 	is: (start_date: any) => !!start_date,
	// 	then: Yup.date()
	// 		.typeError('Ngày kết thúc không hợp lệ')
	// 		.min(Yup.ref('start_date'), 'Ngày kết thúc phải sau ngày bắt đầu')
	// })
	// .required('Ngày kết thúc không được để trống')
	// end_date: Yup.date()
	// 	.nullable()
	// 	.when('start_date', (start_date, schema) =>
	// 		start_date ? schema.min(start_date, 'Ngày kết thúc phải sau ngày bắt đầu') : schema
	// 	)
	// 	.required('Ngày kết thúc không được để trống')
});
