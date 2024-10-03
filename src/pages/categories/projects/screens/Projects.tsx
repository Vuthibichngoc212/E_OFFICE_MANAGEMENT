import { Box, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useStyles } from './Projects.styles';
import theme from '@/themes/theme.d';
import DataTable from '@/components/common/DataTable/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesActions, selectPagination, selectProjects } from '@/redux/slices/categories';
import { useEffect } from 'react';
import FormModal from '../components/FormModal/FormModal';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import { toast } from 'react-toastify';
import { toLocaleDateTimeString } from '@/utils/DateTime';
import useHandlePagination from '@/hooks/useHandlePagination';
import Pagination from '@/components/common/Pagination/Pagination';

const Projects = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const projects = useSelector(selectProjects);
	const loading = useSelector((state: any) => state.categories.loading);
	const pagination = useSelector(selectPagination);
	const { page, pageSize, handleChangePage, handleChangePageSize } = useHandlePagination();

	useEffect(() => {
		dispatch(categoriesActions.fetchGetProjects({ page, pageSize }));
	}, [dispatch, page, pageSize]);

	const operationColumns = [
		{
			name: 'id',
			title: 'STT',
			align: 'left',
			width: 60,
			render: (_: any, index: any) => <Typography>{index + 1}</Typography>
		},
		{ name: 'name', title: 'Tên dự án', align: 'left', width: 160 },
		{ name: 'code', title: 'Mã dự án', align: 'left', width: 100 },
		{ name: 'description', title: 'Mô tả', align: 'left', width: 100 },
		{
			name: 'start_date',
			title: 'Thời gian bắt đầu',
			align: 'left',
			width: 100,
			render: (value: any) => {
				const formattedTime = toLocaleDateTimeString(value.start_date, 'DD/MM/YYYY HH:mm:ss');
				return (
					<Box>
						<Typography variant="body1_medium">{formattedTime}</Typography>
					</Box>
				);
			}
		},
		{
			name: 'end_date',
			title: 'Thời gian kết thúc',
			align: 'left',
			width: 100,
			render: (value: any) => {
				const formattedTime = toLocaleDateTimeString(value.end_date, 'DD/MM/YYYY HH:mm:ss');
				return (
					<Box>
						<Typography variant="body1_medium">{formattedTime}</Typography>
					</Box>
				);
			}
		},
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
					data={projects || []}
					columns={operationColumns}
					isLoading={loading}
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
							title: 'Thêm dự án'
						},
						modals: {
							impactFormModal: {
								isShow: true,
								formModalComponent: (props: any) => {
									return <FormModal {...props} />;
								},
								addTitle: 'Thêm dự án',
								editTitle: 'Chỉnh sửa dự án',
								cancelButtonLabel: 'Huỷ bỏ',
								EditButtonLabel: 'Cập nhật',
								AddButtonLabel: 'Lưu'
							},
							DeleteModal: {
								isShow: true,
								DeleteModalComponent: DeletePopUp,
								action: (id: any) => {
									dispatch(
										categoriesActions.fetchDeleteProjects({
											data: { id },
											meta: {
												onSuccess: () => {
													toast.success('Xoá dự án thành thành công!', { autoClose: 2000 });
													dispatch(categoriesActions.fetchGetIssuers());
												},
												onError: () => {
													toast.error('Xoá dự án thành thất bại!', { autoClose: 2000 });
												}
											}
										})
									);
								},
								title: 'Xóa dự án',
								message: 'Bạn có chắc chắn muốn xoá không?'
							}
						}
					}}
				/>
			</Box>
			<Pagination
				total={pagination.total_count}
				page={pagination.current_page}
				pageSize={pagination.limit}
				handleChangePage={handleChangePage}
				handleChangePageSize={handleChangePageSize}
			/>
		</Box>
	);
};

export default Projects;
