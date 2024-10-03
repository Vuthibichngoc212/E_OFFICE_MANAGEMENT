/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import theme from '@/themes/theme.d';
import { useStyles } from './Issuers.styles';
import DataTable from '@/components/common/DataTable/DataTable';
import { useAppDispatch } from '@/redux/hook';
import { useSelector } from 'react-redux';
import { categoriesActions, selectIssuers } from '@/redux/slices/categories';
import { useEffect } from 'react';
import FormModal from '../components/FormModal/FormModal';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import { toast } from 'react-toastify';

const Issuers = () => {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const issuers = useSelector(selectIssuers);
	const loading = useSelector((state: any) => state.categories.loading);

	useEffect(() => {
		dispatch(categoriesActions.fetchGetIssuers());
	}, [dispatch]);

	const operationColumns = [
		{
			name: 'id',
			title: 'STT',
			align: 'left',
			width: 60,
			render: (_: any, index: any) => <Typography>{index + 1}</Typography>
		},
		{ name: 'name', title: 'Tên nơi ban hành', align: 'left', width: 140 },
		{ name: 'code', title: 'Mã nơi ban hành', align: 'left', width: 240 },
		{ name: 'abbreviation', title: 'Tên viết tắt', align: 'left', width: 240 },
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
					data={issuers || []}
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
							title: 'Thêm nơi ban hành'
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
										categoriesActions.fetchDeleteIssuers({
											data: { id },
											meta: {
												onSuccess: () => {
													toast.success('Xoá nơi ban hành thành công!', { autoClose: 2000 });
													dispatch(categoriesActions.fetchGetIssuers());
												},
												onError: () => {
													toast.error('Xoá nơi ban hành thất bại!', { autoClose: 2000 });
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

export default Issuers;
