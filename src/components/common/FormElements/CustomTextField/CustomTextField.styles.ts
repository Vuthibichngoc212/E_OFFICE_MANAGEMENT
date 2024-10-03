import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	textFieldRoot: {
		'& .MuiFormHelperText-root': {
			marginLeft: 0,
			fontSize: '12px'
		}
	}
}));
