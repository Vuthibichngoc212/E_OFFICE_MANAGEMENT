// import './App.css';
// import { SnackbarProvider } from 'notistack';
// import { Provider } from 'react-redux';
// import store, { persistor } from '@/redux/store.ts';
// import { PersistGate } from 'redux-persist/integration/react';
// import AppRoute from '@/routes/AppRoute.tsx';

// function App() {
// 	return (
// 		<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
// 			<Provider store={store}>
// 				<PersistGate persistor={persistor}>
// 					<AppRoute />
// 				</PersistGate>
// 			</Provider>
// 		</SnackbarProvider>
// 	);
// }

// export default App;

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './themes/theme.d';
import './styles/index.styles.css';
import AppRoute from './routes/AppRoute';

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<AppRoute />
			<CssBaseline />
		</ThemeProvider>
	);
}

export default App;
