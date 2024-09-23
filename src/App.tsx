import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './themes/theme.d';
import './styles/index.styles.css';
import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={customTheme}>
				<AppRoute />
				<CssBaseline />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
