import CRUDModal from '@/components/common/Modal/CRUDModal/CRUDModal';
import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { documanetTypeSchema } from '../helpers/validation-schema.helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import { useAppDispatch } from '@/redux/hook';
import { categoriesActions } from '@/redux/slices/categories';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

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
		resolver: yupResolver(documanetTypeSchema)
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
			description: ''
		});
	}, [editRole, isOpenModal, methods]);

	const handleSubmitForm = (data: any) => {
		const payload: any = {
			name: data.name,
			description: data.description
		};

		if (editRole) {
			payload.id = editRole.id;
			dispatch(
				categoriesActions.fetchUpdateDocumentType({
					data: payload,
					meta: {
						onSuccess: () => {
							setIsOpenModal(false);
							toast.success('Cập nhật loại văn bản thành công!', { autoClose: 2000 });
							dispatch(categoriesActions.fetchGetDocumentType());
						},
						onError: () => {
							toast.error('Cập nhật loại văn bản thất bại!', { autoClose: 2000 });
						}
					}
				})
			);
			return;
		}

		dispatch(
			categoriesActions.fetchCreateDocumentType({
				data: payload,
				meta: {
					onSuccess: () => {
						setIsOpenModal(false);
						toast.success('Thêm loại văn bản thành công!', { autoClose: 2000 });
						dispatch(categoriesActions.fetchGetDocumentType());
					},
					onError: () => {
						toast.error('Thêm loại văn bản thất bại!', { autoClose: 2000 });
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
						label="Tên loại văn bản"
						name="name"
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
