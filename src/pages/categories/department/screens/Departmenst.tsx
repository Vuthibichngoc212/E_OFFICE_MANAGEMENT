/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './Departmenst.styles';
import { categoriesActions, selectDepartmenst } from '@/redux/slices/categories';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
// import { toast } from 'react-toastify';
import theme from '@/themes/theme.d';
import DataTable from '@/components/common/DataTable/DataTable';
import FormModal from '../components/FormModal/FormModal';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import { toast } from 'react-toastify';

const Departmenst = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const documentTypes = useSelector(selectDepartmenst);
	const loading = useSelector((state: any) => state.categories.loading);

	useEffect(() => {
		dispatch(categoriesActions.fetchGetDepartments());
	}, [dispatch]);

	const operationColumns = [
		{
			name: 'id',
			title: 'STT',
			align: 'left',
			width: 60,
			render: (_: any, index: any) => <Typography>{index + 1}</Typography>
		},
		{ name: 'name', title: 'Tên phòng ban', align: 'left', width: 140 },
		{ name: 'parent_department_id', title: 'parent_department_id', align: 'left', width: 240 },
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
							title: 'Thêm phòng ban'
						},
						modals: {
							impactFormModal: {
								isShow: true,
								formModalComponent: (props: any) => {
									return <FormModal {...props} />;
								},
								addTitle: 'Thêm phòng ban',
								editTitle: 'Chỉnh sửa phòng ban',
								cancelButtonLabel: 'Huỷ bỏ',
								EditButtonLabel: 'Cập nhật',
								AddButtonLabel: 'Lưu'
							},
							DeleteModal: {
								isShow: true,
								DeleteModalComponent: DeletePopUp,
								action: (id: any) => {
									dispatch(
										categoriesActions.fetchDeleteDepartments({
											data: { id },
											meta: {
												onSuccess: () => {
													toast.success('Xoá phòng ban thành công!', { autoClose: 2000 });
													dispatch(categoriesActions.fetchGetDepartments());
												},
												onError: () => {
													toast.error('Xoá phòng ban thất bại!', { autoClose: 2000 });
												}
											}
										})
									);
								},
								title: 'Xóa phòng ban',
								message: 'Bạn có chắc chắn muốn xoá không?'
							}
						}
					}}
				/>
			</Box>
		</Box>
	);
};

export default Departmenst;
