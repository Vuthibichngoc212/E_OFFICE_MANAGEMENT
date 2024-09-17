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
				margin: '0px 14px 0px 10px',
				color: theme.palette.primary.main
			}
		}
	},
	itemTextRoot: {
		'& .MuiTypography-root': {
			fontSize: 14,
			color: theme.palette.base.black,
			fontFamily: 'Inter',
			fontWeight: 400
		}
	},
	iconButtonRoot: {
		'&.MuiIconButton-root': {
			position: 'absolute',
			width: '2.4rem',
			height: '2.4rem',
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.neutral.main,
			top: '73.9rem',
			right: 0,
			transform: 'translateX(50%)',
			zIndex: 999,
			'&:hover': {
				backgroundColor: theme.palette.primary.main
			},
			'& .MuiSvgIcon-root': {
				width: '2rem',
				height: '2rem',
				position: 'relative',
				right: '0.01rem'
			}
		}
	}
}));
