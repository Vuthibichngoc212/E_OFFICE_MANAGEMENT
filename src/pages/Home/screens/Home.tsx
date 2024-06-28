import { Stack, Switch, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook.ts';
import { setThemeMode } from '@/redux/slices/ui.ts';

const Home = () => {
	const themeMode = useAppSelector((state) => state.ui.themeMode);
	const dispatch = useAppDispatch();
	const onChangeTheme = () => {
		dispatch(setThemeMode({ mode: themeMode === 'light' ? 'dark' : 'light' }));
	};
	return (
		<div>
			<Typography variant={'h1'}>Home</Typography>
			<Stack direction={'row'} alignItems={'center'}>
				<Typography>Dark mode</Typography>
				<Switch checked={themeMode === 'dark'} onClick={onChangeTheme} />
			</Stack>
		</div>
	);
};

export default Home;
