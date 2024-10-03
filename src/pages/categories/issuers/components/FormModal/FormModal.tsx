import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import CRUDModal from '@/components/common/Modal/CRUDModal/CRUDModal';
import { useAppDispatch } from '@/redux/hook';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { issuersSchema } from '../helpers/validation-schema.helpers';
import { categoriesActions } from '@/redux/slices/categories';
import { toast } from 'react-toastify';

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
			abbreviation: '',
			description: ''
		});
	}, [editRole, isOpenModal, methods]);

	const handleSubmitForm = (data: any) => {
		const payload: any = {
			name: data.name,
			code: data.code,
			abbreviation: data.abbreviation,
			description: data.description
		};

		if (editRole) {
			payload.id = editRole.id;
			dispatch(
				categoriesActions.fetchUpdateIssuers({
					data: payload,
					meta: {
						onSuccess: () => {
							setIsOpenModal(false);
							toast.success('Cập nhật nơi ban hành thành công!', { autoClose: 2000 });
							dispatch(categoriesActions.fetchGetIssuers());
						},
						onError: () => {
							toast.error('Cập nhật nơi ban hành thất bại!', { autoClose: 2000 });
						}
					}
				})
			);
			return;
		}

		dispatch(
			categoriesActions.fetchCreateIssuers({
				data: payload,
				meta: {
					onSuccess: () => {
						setIsOpenModal(false);
						toast.success('Thêm nơi ban hành thành công!', { autoClose: 2000 });
						dispatch(categoriesActions.fetchGetIssuers());
					},
					onError: () => {
						toast.error('Thêm nơi ban hành thất bại!', { autoClose: 2000 });
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
					<CustomTextField
						label="Tên nơi ban hành"
						name="name"
						control={methods.control}
						required
					/>
					<CustomTextField label="Mã nơi ban hành" name="code" control={methods.control} required />
					<CustomTextField
						label="Tên viết tắt"
						name="abbreviation"
						control={methods.control}
						required
					/>
					<CustomTextField label="Mô tả" name="description" control={methods.control} required />
				</Box>
			</FormProvider>
		</CRUDModal>
	);
};

export default FormModal;
