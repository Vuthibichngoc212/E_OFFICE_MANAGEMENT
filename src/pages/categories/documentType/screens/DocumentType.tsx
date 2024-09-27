/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import DataTable from '@/components/common/DataTable/DataTable';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesActions, selectDocumentType } from '@/redux/slices/categories';
import { useEffect } from 'react';
import theme from '@/themes/theme.d';
import FormModal from '../components/FormModal/FormModal';
import { useStyles } from './DocumentTypeList.style';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import { toast } from 'react-toastify';

const DocumentTypeList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const documentTypes = useSelector(selectDocumentType);
	const loading = useSelector((state: any) => state.categories.loading);

	useEffect(() => {
		dispatch(categoriesActions.fetchGetDocumentType());
	}, [dispatch]);

	const operationColumns = [
		{
			name: 'id',
			title: 'STT',
			align: 'left',
			width: 60,
			render: (_: any, index: any) => <Typography>{index + 1}</Typography>
		},
		{ name: 'name', title: 'Tên loại văn bản', align: 'left', width: 140 },
		{ name: 'description', title: 'Mô tả', align: 'left', width: 240 },
		{
			name: 'action',
			title: 'Thao tác',
			align: 'center',
			width: 100,
			render: ({ value, handleDelete, handleEdit }: any) => (
				<Box className={classes.iconActionsBox}>
					<BorderColorIcon
						onClick={handleEdit}
						sx={{
							cursor: 'pointer',
							color: theme.palette.primary.light
						}}
					/>

					<DeleteOutlineIcon
						onClick={() => handleDelete(value)}
						sx={{
							cursor: 'pointer'
						}}
					/>
				</Box>
			)
		}
	];
	return (
		<Box>
			<Box
				sx={{
					height: '80vh',
					background: theme.palette.background.paper,
					borderRadius: '8px',
					boxShadow: ' 0px 1px 5px 0px #0000000D',
					padding: '2.4rem'
				}}
			>
				<DataTable
					data={documentTypes || []}
					columns={operationColumns}
					customTableStyles={{
						height: '90%'
					}}
					options={{
						search: {
							isShow: true,
							placeholder: 'Tìm kiếm'
						},
						addButton: {
							isShow: true,
							title: 'Thêm loại văn bản'
						},
						modals: {
							impactFormModal: {
								isShow: true,
								formModalComponent: (props: any) => {
									return <FormModal {...props} />;
								},
								addTitle: 'Thêm loại văn bản',
								editTitle: 'Chỉnh sửa loại văn bản',
								cancelButtonLabel: 'Huỷ bỏ',
								EditButtonLabel: 'Cập nhật',
								AddButtonLabel: 'Lưu'
							},
							DeleteModal: {
								isShow: true,
								DeleteModalComponent: DeletePopUp,
								action: (id: any) => {
									dispatch(
										categoriesActions.fetchDeleteDocumentType({
											data: { id },
											meta: {
												onSuccess: () => {
													toast.success('Xoá loại văn bản thành công!', { autoClose: 2000 });
													dispatch(categoriesActions.fetchGetDocumentType());
												},
												onError: () => {
													toast.error('Xoá loại văn bản thất bại!', { autoClose: 2000 });
												}
											}
										})
									);
								},
								title: 'Xóa loại văn bản',
								message: 'Bạn có chắc chắn muốn xoá không?'
							}
						}
					}}
				/>
			</Box>
		</Box>
	);
};

export default DocumentTypeList;
