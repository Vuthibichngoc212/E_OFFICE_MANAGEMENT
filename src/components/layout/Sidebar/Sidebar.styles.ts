import theme from '@/themes/theme.d';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	listItemRoot: {
		'&.MuiButtonBase-root': {
			'&.MuiListItemButton-root:hover': {
				borderRadius: '0.8rem'
			},
			'& .MuiListItemIcon-root': {
				minWidth: 0,
				margin: '0px 15px 0px 16px',
				color: theme.palette.primary.main
			}
		}
	},
	itemTextRoot: {
		'& .MuiTypography-root': {
			fontSize: 14,
			fontFamily: 'Inter'
		}
	},

	sidebarFooter: {
		display: 'flex',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		right: 0,
		width: '100%'
	},

	iconButtonRoot: {
		'&.MuiIconButton-root': {
			position: 'absolute',
			width: '3.0rem',
			height: '3.0rem',
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.neutral.main,
			bottom: '5.5rem',
			right: 0,
			transform: 'translateX(50%)',
			zIndex: 999,
			'&:hover': {
				backgroundColor: theme.palette.primary.main
			}
		}
	}
}));
