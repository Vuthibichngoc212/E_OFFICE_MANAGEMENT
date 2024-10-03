import React from 'react';
import {
	Box,
	MenuItem,
	Pagination as MuiPagination,
	Select,
	SelectChangeEvent,
	Typography
} from '@mui/material';
import { useStyles } from './Pagination.styles';

type PaginationProps = {
	page: number;
	handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
	handleChangePageSize: (event: SelectChangeEvent<number>) => void;
	total: number;
	pageSize: number;
	customStyle?: Record<string, any>;
};

function Pagination({
	page,
	pageSize,
	total,
	handleChangePage,
	handleChangePageSize,
	customStyle
}: PaginationProps) {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
				<Typography variant="subbody1_regular">Hiển thị</Typography>
				<Select
					autoWidth
					sx={{ height: '2.4rem' }}
					onChange={handleChangePageSize}
					value={pageSize}
				>
					<MenuItem value={20}>20</MenuItem>
					<MenuItem value={50}>50</MenuItem>
					<MenuItem value={100}>100</MenuItem>
				</Select>
				<MuiPagination
					sx={customStyle}
					count={total || 0}
					page={page}
					onChange={handleChangePage}
				/>
			</Box>
		</Box>
	);
}
export default Pagination;
