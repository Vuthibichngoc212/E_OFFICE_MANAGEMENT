import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import CRUDModal from '@/components/common/Modal/CRUDModal/CRUDModal';
import { useAppDispatch } from '@/redux/hook';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { issuersSchema } from '../helpers/validation-schema.helpers';
import { categoriesActions } from '@/redux/slices/categories';
import { toast } from 'react-toastify';
import CustomDateTimePicker from '@/components/common/FormElements/CustomDateTimePicker/CustomDateTimePicker';
import { toLocaleDateTimeString } from '@/utils/DateTime';

const FormModal = ({
	isOpenModal,
	setIsOpenModal,
	headerTitle,
	cancelButtonLabel,
	submitButtonLabel,
	editRole,
	setEditRole
}: any) => {
	const dispatch = useAppDispatch();
	const methods = useForm({
		resolver: yupResolver(issuersSchema)
	});

	useEffect(() => {
		if (isOpenModal === false) {
			setEditRole(null);
		}
	}, [isOpenModal, setEditRole]);

	useEffect(() => {
		if (editRole) {
			methods.reset(editRole);
			return;
		}
		methods.reset({
			name: '',
			code: '',
			project_manager_id: undefined,
			description: '',
			start_date: undefined,
			end_date: undefined
		});
	}, [editRole, isOpenModal, methods]);

	const handleSubmitForm = (data: any) => {
		const payload: any = {
			name: data.name,
			code: data.code,
			project_manager_id: data.project_manager_id,
			description: data.description,
			start_date: toLocaleDateTimeString(data.start_date, 'YYYY-MM-DD HH:mm:ss'),
			end_date: toLocaleDateTimeString(data.end_date, 'YYYY-MM-DD HH:mm:ss')
		};

		if (editRole) {
			payload.id = editRole.id;
			dispatch(
				categoriesActions.fetchUpdateProjects({
					data: payload,
					meta: {
						onSuccess: () => {
							setIsOpenModal(false);
							toast.success('Cập nhật dự án thành công!', { autoClose: 2000 });
							dispatch(categoriesActions.fetchGetProjects());
						},
						onError: () => {
							toast.error('Cập nhật dự án thất bại!', { autoClose: 2000 });
						}
					}
				})
			);
			return;
		}

		dispatch(
			categoriesActions.fetchCreateProjects({
				data: payload,
				meta: {
					onSuccess: () => {
						setIsOpenModal(false);
						toast.success('Thêm dự án thành công!', { autoClose: 2000 });
						dispatch(categoriesActions.fetchGetProjects());
					},
					onError: () => {
						toast.error('Thêm dự án thất bại!', { autoClose: 2000 });
					}
				}
			})
		);
	};

	return (
		<CRUDModal
			isOpenModal={isOpenModal}
			setIsOpenModal={setIsOpenModal}
			headerTitle={headerTitle}
			cancelButtonLabel={cancelButtonLabel}
			submitButtonLabel={submitButtonLabel}
			onSubmit={methods.handleSubmit(handleSubmitForm)}
		>
			<FormProvider {...methods}>
				<Box sx={{ width: '60rem' }}>
					<CustomTextField label="Tên dự án " name="name" control={methods.control} required />
					<CustomTextField label="Mã dự án" name="code" control={methods.control} required />
					<CustomTextField label="Mô tả" name="description" control={methods.control} required />
					<CustomTextField
						label="project_manager_id"
						name="project_manager_id"
						control={methods.control}
						required
					/>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<CustomDateTimePicker
								label="Thời gian bắt đầu"
								name="start_date"
								control={methods.control}
								required
							/>
						</Grid>
						<Grid item xs={6}>
							<CustomDateTimePicker
								label="Thời gian kết thúc"
								name="end_date"
								control={methods.control}
								required
							/>
						</Grid>
					</Grid>
				</Box>
			</FormProvider>
		</CRUDModal>
	);
};

export default FormModal;
