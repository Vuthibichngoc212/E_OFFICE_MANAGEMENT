// import './App.css';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import theme, { darkTheme } from './styles/theme.ts';
// import { SnackbarProvider } from 'notistack';
// import { Provider } from 'react-redux';
// import store, { persistor } from '@/redux/store.ts';
// import { useAppSelector } from '@/redux/hook.ts';
// import { PersistGate } from 'redux-persist/integration/react';
// import AppRoute from '@/routes/AppRoute.tsx';

// const AppContent = () => {
// 	const themeMode = useAppSelector((state) => state.ui.themeMode);
// 	const currentTheme = themeMode === 'dark' ? darkTheme : theme;
// 	return (
// 		<ThemeProvider theme={currentTheme}>
// 			<CssBaseline />
// 			<AppRoute />
// 		</ThemeProvider>
// 	);
// };

// function App() {
// 	return (
// 		<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
// 			<Provider store={store}>
// 				<PersistGate persistor={persistor}>
// 					<AppContent />
// 				</PersistGate>
// 			</Provider>
// 		</SnackbarProvider>
// 	);
// }

// export default App;

import './App.css';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store, { persistor } from '@/redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoute from '@/routes/AppRoute.tsx';

function App() {
	return (
		<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<AppRoute />
				</PersistGate>
			</Provider>
		</SnackbarProvider>
	);
}

export default App;
