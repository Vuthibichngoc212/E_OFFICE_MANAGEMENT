import { Typography } from '@mui/material';

const DocumentType = () => {
	const operationColums = [
		{ name: 'event_type', title: 'Sự kiện', align: 'left', width: '80px' },
		{ name: 'topic', title: 'Topic', align: 'left', width: '150px' }
	];

	return (
		<div>
			<Typography variant={'h1'}>category/document-type</Typography>
		</div>
	);
};

export default DocumentType;
