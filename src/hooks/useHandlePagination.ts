import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

const useHandlePagination = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(20);

	const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => setPage(value);
	const handleChangePageSize = (event: SelectChangeEvent<number>) => {
		setPageSize(Number(event.target.value));
		setPage(1);
	};

	return { page, pageSize, handleChangePage, handleChangePageSize };
};

export default useHandlePagination;
