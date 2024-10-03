import {
	Box,
	Button,
	Grid,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography
} from '@mui/material';
import SearchIcon from '@/assets/icons/search-icon.svg?react';
import theme from '@/themes/theme.d';
import { useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import noData from '@/assets/images/no-data.png';
import { ControlType } from '@/types/index.types';

interface DataTableProps {
	columns?: any;
	data: any;
	options?: any;
	customTableStyles?: any;
	isLoading?: boolean;
	isCheckDetail?: any;
	total?: number;
}

const DataTable: React.FC<DataTableProps> = ({
	data = [],
	columns,
	options,
	customTableStyles,
	isLoading = false
}) => {
	const [editRecord, setEditRecord] = useState<any>(null);
	const [show, setShow] = useState(false);
	const [render, setRender] = useState(false);

	// handle delete
	const [deleteRecord, setDeleteRecord] = useState<any>(null);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

	const handleOpenDeleteModal = () => {
		setIsOpenDeleteModal(true);
	};
	const handleCloseDeleteModal = () => {
		setIsOpenDeleteModal(false);
	};
	const handleConfirmDeleteModal = () => {
		handleCloseDeleteModal();
		options.modals.DeleteModal.action(deleteRecord.id);
	};

	const ImpactFormModal = useMemo(() => {
		if (options && options.modals && options.modals.impactFormModal) {
			return options!.modals!.impactFormModal.formModalComponent;
		}
		return null;
	}, [options]);

	const DeleteModal = useMemo(() => {
		if (options && options.modals && options.modals.DeleteModal) {
			return options!.modals!.DeleteModal.DeleteModalComponent;
		}
		return null;
	}, [options]);

	const handleControl = ({ type, data }: { data?: any; type: ControlType }) => {
		switch (type) {
			case 'search':
				options.search.action(data);
				break;
			case 'delete':
				setDeleteRecord(data);
				handleOpenDeleteModal();
				break;
			case 'add':
				setShow(true);
				break;
			case 'edit':
				setEditRecord(data);
				setShow(true);
				break;
			default:
				break;
		}
	};

	return (
		<Box
			sx={{
				'&.MuiBox-root': {
					height: '100%',
					width: '100%',
					boxSizing: 'border-box',
					...customTableStyles
				}
			}}
		>
			{/* FEATURE */}
			<Grid item md={12}>
				<Box
					sx={{
						mb: '1.6rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					<Box sx={{ position: 'relative' }}>
						{options?.search && options.search.isShow && (
							<TextField
								variant="outlined"
								value={options.search.filters}
								onChange={(e) =>
									options.search.stateAction((prev: any) => ({ ...prev, cccd_1: e.target.value }))
								}
								sx={{
									width: '38rem',
									height: '4.4rem',
									borderRadius: '0.8rem',
									'& .MuiOutlinedInput-root': {
										height: '100%',
										borderRadius: '2.4rem',
										'& .MuiInputBase-input': {
											height: '100%',
											padding: '0 14px',
											fontSize: '1.4rem'
										}
									}
								}}
								InputProps={{
									startAdornment: (
										<Box
											sx={{
												cursor: 'pointer',
												display: 'flex',
												alignItems: 'center',
												marginRight: '8px'
											}}
										>
											<SearchIcon />
										</Box>
									)
								}}
								placeholder={options.search.placeholder}
							/>
						)}
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ position: 'relative' }}>
							{options?.filter && options.filter.isShow && (
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: 1,
										...options?.filter?.customStyles
									}}
								>
									<Button
										variant="contained"
										sx={{
											'&.MuiButtonBase-root.MuiButton-root': { height: '4.6rem' }
										}}
										size="medium"
										onClick={() => {
											if (options && options.filter && options.filter.isShow && !render) {
												setRender(true);
												setTimeout(() => setShow(true), 10);
											} else {
												setShow(false);
												setTimeout(() => setRender(false), 150);
											}
										}}
									>
										Lọc thông tin
									</Button>
								</Box>
							)}
						</Box>
						{options && options.addButton && options.addButton.isShow && (
							<Button
								variant="contained"
								startIcon={<AddIcon />}
								size="medium"
								sx={{ marginLeft: '24px', borderRadius: '20px', height: '4.4rem' }}
								onClick={() => {
									setShow(true);
								}}
							>
								{options.addButton.title}
							</Button>
						)}
					</Box>
				</Box>
			</Grid>

			{/* TABLE */}
			<TableContainer
				sx={{
					'&.MuiTableContainer-root': {
						borderRadius: '0.8rem',
						overflowY: 'auto',
						maxHeight: '100%',
						pr: '1rem',
						'&::-webkit-scrollbar': {
							width: '6px',
							height: '6px'
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: theme.palette.neutral.lightSilver,
							borderRadius: '10rem'
						},
						'&::-webkit-scrollbar-thumb:hover': {
							backgroundColor: theme.palette.neutral.coolGray
						},
						'& .MuiTable-root': {
							minWidth: 1,
							'& .MuiTableHead-root': {
								'& .MuiTableRow-root': {
									'& .MuiTableCell-root': {
										padding: '1.4rem 1.2rem',
										border: 'none',
										backgroundColor: theme.palette.primary.babyOrange
									},
									'& .MuiTableCell-root:first-of-type': {
										borderRadius: '0.8rem 0 0 0.8rem'
									},
									'& .MuiTableCell-root:last-child': {
										borderRadius: '0 0.8rem 0.8rem 0'
									}
								}
							},
							'& .MuiTableBody-root': {
								'& .MuiTableRow-root': {
									// cursor: data.length > 0 ? 'pointer' : '',
									'&:hover': {
										backgroundColor: data.length > 0 ? '#F0F7FE !important' : ''
									},
									'& .MuiTableCell-root': {
										padding: !isLoading ? '1.2rem' : '1.2rem 1.2rem 1.2rem 0',
										border: 'none'
									},
									'&:nth-of-type(even)': {
										backgroundColor:
											!isLoading && !show ? theme.palette.neutral.main : 'transparent'
									},
									'&:nth-of-type(odd)': {
										backgroundColor: !isLoading && show ? theme.palette.neutral.main : 'transparent'
									},
									'& .MuiTableCell-root:first-of-type': {
										borderRadius: '0.8rem 0 0 0.8rem'
									},
									'& .MuiTableCell-root:last-child': {
										borderRadius: '0 0.8rem 0.8rem 0',
										paddingRight: !isLoading ? '1.2rem' : '0'
									}
								}
							}
						}
					}
				}}
			>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{columns
								.filter((col: any) => col)
								.map((col: any, index: number) => {
									return (
										<TableCell
											key={index}
											align={col.align}
											sx={{
												'&.MuiTableCell-root': {
													minWidth: col.width,
													maxWidth: col.width,
													wordBreak: 'break-word'
												}
											}}
										>
											{typeof col.title === 'string' ? (
												<Typography variant="body2_semibold">{col.title}</Typography>
											) : (
												col.title()
											)}
										</TableCell>
									);
								})}
							{options && options.checkList && options.checkList.isShow && (
								<TableCell
									sx={{
										'&.MuiTableCell-root': {
											textAlign: 'center',
											minWidth: 70,
											maxWidth: 70
										}
									}}
								>
									<Typography variant="body2_semibold">Chọn</Typography>
								</TableCell>
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{options && options.filter && options.filter.isShow && render && (
							<TableRow
								sx={{
									opacity: show ? 1 : 0,
									transform: show ? 'translateY(0)' : 'translateY(-20px)',
									transition: 'opacity 0.1s  , transform 0.1s ',

									'@keyframes slideDown': {
										from: {
											opacity: 0,
											transform: 'translateY(-20px)'
										},
										to: {
											opacity: 1,
											transform: 'translateY(0)'
										}
									}
								}}
							>
								{columns
									.filter((e: any) => e)
									.map((column: { name: any }) => {
										const findFilterOption = options.filter.filterOptions.find(
											(e: { name: any }) => e.name === column.name
										);
										if (!findFilterOption)
											return (
												<TableCell
													key={column.name}
													sx={{
														backgroundColor: theme.palette.primary.lightSkyBlue,
														'&.MuiTableCell-root': {
															padding: '1rem !important'
														},
														'& .MuiInput-underline': {
															fontSize: '1.4rem',
															'& .MuiInputBase-input ': {
																pb: '0.1rem'
															},
															'&::before': {
																borderBottomColor: theme.palette.neutral.lightSilver
															}
														}
													}}
												></TableCell>
											);
										return (
											<TableCell
												key={column.name}
												sx={{
													backgroundColor: theme.palette.primary.lightSkyBlue,
													'&.MuiTableCell-root': {
														padding: '1rem !important'
													},
													'& .MuiInput-underline': {
														fontSize: '1.4rem',
														'& .MuiInputBase-input ': {
															pb: '0.1rem'
														},
														'&::before': {
															borderBottomColor: theme.palette.neutral.lightSilver
														}
													}
												}}
											>
												{findFilterOption.component}
											</TableCell>
										);
									})}
							</TableRow>
						)}
						{isLoading ? (
							new Array(20).fill(0).map((_, index) => (
								<TableRow key={index}>
									{new Array(columns.filter((e: any) => e).length).fill(0).map((_, index) => (
										<TableCell key={index}>
											<Skeleton variant="rounded" width="100%" animation="wave" height={36} />
										</TableCell>
									))}
								</TableRow>
							))
						) : data.length > 0 ? (
							data.map((row: any, index: number) => {
								return (
									<TableRow key={index}>
										{columns
											.filter((e: any) => e)
											.map((cell: any) => {
												if (cell.name === 'action') {
													return (
														<TableCell key={cell.name}>
															{cell.render({
																value: row,
																handleDelete: () => handleControl({ type: 'delete', data: row }),
																handleEdit: () => handleControl({ type: 'edit', data: row })
															})}
														</TableCell>
													);
												}
												return (
													<TableCell
														key={cell.name}
														sx={{
															'&.MuiTableCell-root': {
																textAlign:
																	cell.align === 'right'
																		? 'end'
																		: cell.align === 'left'
																			? 'start'
																			: 'center',
																minWidth: cell.width,
																maxWidth: cell.width,
																wordBreak: 'break-word'
															}
														}}
													>
														{cell.render ? (
															cell.render(row, index)
														) : (
															<Typography
																variant="body2_regular"
																sx={{
																	color: row[cell.name] ? 'black' : theme.palette.neutral.coolGray
																}}
															>
																{row[cell.name] ? row[cell.name] : 'Không có dữ liệu'}
															</Typography>
														)}
													</TableCell>
												);
											})}
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={10} sx={{ height: '40vh' }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											height: '100%'
										}}
									>
										<img src={noData} alt="no data" />
									</Box>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>

			{ImpactFormModal && (
				<ImpactFormModal
					isOpenModal={show}
					setIsOpenModal={setShow}
					headerTitle={
						editRecord
							? options?.modals.impactFormModal.editTitle
							: options?.modals.impactFormModal.addTitle
					}
					cancelButtonLabel={options?.modals.impactFormModal.cancelButtonLabel}
					submitButtonLabel={
						editRecord
							? options?.modals.impactFormModal.EditButtonLabel
							: options?.modals.impactFormModal.AddButtonLabel
					}
					editRole={editRecord}
					setEditRole={setEditRecord}
				/>
			)}
			{DeleteModal && (
				<DeleteModal
					open={isOpenDeleteModal}
					onClose={handleCloseDeleteModal}
					onConfirm={handleConfirmDeleteModal}
					title={options.modals.DeleteModal.title}
					content={
						<Typography
							variant="body2"
							sx={{ color: theme.palette.neutral.black, fontSize: '1.6rem' }}
						>
							{options.modals.DeleteModal.message.replace('{name}')}
						</Typography>
					}
				/>
			)}
		</Box>
	);
};

export default DataTable;
