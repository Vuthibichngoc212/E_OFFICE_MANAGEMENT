// import theme from '@/themes/theme.d';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	iconActionsBox: {
		display: 'flex',
		justifyContent: 'center',
		gap: '1rem',
		alignItems: 'center',
		width: '100%',
		// color: theme.palette.neutral.darkGray,
		cursor: 'pointer'
	},
	iconAction: {
		'&.MuiSvgIcon-root': {
			// fontSize: '1.8rem',
			width: '20px',
			height: '20px'
		}
	}
}));
