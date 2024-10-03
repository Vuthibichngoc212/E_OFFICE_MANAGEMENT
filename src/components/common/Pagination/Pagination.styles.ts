import theme from '@/themes/theme.d';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {
		position: 'fixed',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: '10',
		gap: theme.spacing(1),
		bottom: theme.spacing(3),
		right: theme.spacing(3),
		'& .MuiPagination-root': {
			'& .MuiButtonBase-root': {
				borderRadius: '0'
			},
			'& .MuiButtonBase-root.Mui-selected': {
				backgroundColor: theme.palette.background.default,
				borderRadius: '4px',
				border: '1px solid #498CE8'
			},
			'& svg': {
				fontSize: '2rem',
				fill: '#92939E'
			}
		}
	}
}));
