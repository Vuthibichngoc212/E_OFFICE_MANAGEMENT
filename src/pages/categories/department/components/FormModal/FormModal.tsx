import CRUDModal from '@/components/common/Modal/CRUDModal/CRUDModal';
import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import { useAppDispatch } from '@/redux/hook';
import { categoriesActions } from '@/redux/slices/categories';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { departmentsSchema } from '../helpers/validation-schema.helpers';

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
		resolver: yupResolver(departmentsSchema)
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
			parent_department_id: ''
		});
	}, [editRole, isOpenModal, methods]);

	const handleSubmitForm = (data: any) => {
		const payload: any = {
			name: data.name,
			parent_department_id: data.parent_department_id
		};

		if (editRole) {
			payload.id = editRole.id;
			dispatch(
				categoriesActions.fetchUpdateDepartments({
					data: payload,
					meta: {
						onSuccess: () => {
							setIsOpenModal(false);
							toast.success('Cập nhật phòng ban thành công!', { autoClose: 2000 });
							dispatch(categoriesActions.fetchGetDepartments());
						},
						onError: () => {
							toast.error('Cập nhật phòng ban thất bại!', { autoClose: 2000 });
						}
					}
				})
			);
			return;
		}

		dispatch(
			categoriesActions.fetchCreateDepartments({
				data: payload,
				meta: {
					onSuccess: () => {
						setIsOpenModal(false);
						toast.success('Thêm phòng ban thành công!', { autoClose: 2000 });
						dispatch(categoriesActions.fetchGetDepartments());
					},
					onError: () => {
						toast.error('Thêm phòng ban thất bại!', { autoClose: 2000 });
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
					<CustomTextField label="Tên phòng ban" name="name" control={methods.control} required />
					<CustomTextField
						label="parent_department_id"
						name="parent_department_id"
						control={methods.control}
						required
					/>
				</Box>
			</FormProvider>
		</CRUDModal>
	);
};

export default FormModal;
