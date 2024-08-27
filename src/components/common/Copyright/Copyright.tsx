import ENV from '@/config/env';
import { Link, Stack, Typography } from '@mui/material';
import React from 'react';

const Copyright = () => {
	return (
		<Stack justifyContent="center">
			<Typography
				sx={{
					display: 'flex',
					justifyContent: 'center',
					fontSize: '0.875rem',
					fontWeight: 400,
					color: 'rgba(0, 0, 0, 0.6)',
					textAlign: 'center',
					lineHeight: 1.43
				}}
			>
				<span>Copyright ©{new Date().getFullYear()}</span>
				<Link href="https://piditi.com/" target="_blank" ml={1}>
					<img src="/images/pnk-dark.png" height={20} width="auto" />
				</Link>
			</Typography>
			{ENV.MODE !== 'development' && (
				<Typography
					component="span"
					sx={{
						margin: 0,
						fontWeight: 400,
						fontSize: '0.75rem',
						lineHeight: 1.66,
						textAlign: 'center',
						color: 'rgba(0, 0, 0, 0.6)'
					}}
				>
					All rights reserved Phenikaa Digital Transformation JSC
				</Typography>
			)}
		</Stack>
	);
};

export default Copyright;
