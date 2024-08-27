import { Box, Link } from '@mui/material';

interface Props {
	isMini?: boolean;
}

const CopyrightMini = ({ isMini }: Props) => {
	const currentYear = new Date().getFullYear();
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				flex: '1 0 auto',
				color: '#fff',
				fontSize: '0.875rem',
				fontFamily: 'Inter-Bold',
				lineHeight: 1.43
			}}
		>
			{!isMini && (
				<Link href="https://piditi.com/" target="_blank" mr={1}>
					<img src="image/pnk-sm-light.png" height={20} width="auto" />
				</Link>
			)}
			<span>©{currentYear}</span>
		</Box>
	);
};

export default CopyrightMini;
