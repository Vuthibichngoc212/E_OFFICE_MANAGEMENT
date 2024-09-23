import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesActions, selectCompanies } from '@/redux/slices/categories';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography
} from '@mui/material';

const DocumentTypeList = () => {
	const dispatch = useDispatch();
	const documentTypes = useSelector(selectCompanies);
	const loading = useSelector((state: any) => state.categories.loading);

	useEffect(() => {
		dispatch(categoriesActions.fetchGetDocumentType());
	}, [dispatch]);

	console.log(11, documentTypes);

	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Danh sách loại văn bản
			</Typography>

			{loading ? (
				<Typography variant="body1">Đang tải dữ liệu...</Typography>
			) : (
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Tên loại văn bản</TableCell>
								<TableCell>Mô tả</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{documentTypes && documentTypes.length > 0 ? (
								documentTypes.map((docType, index) => (
									<TableRow key={index}>
										<TableCell>{docType.name}</TableCell>
										<TableCell>{docType.description}</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell colSpan={2}>Không có dữ liệu</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	);
};

export default DocumentTypeList;
