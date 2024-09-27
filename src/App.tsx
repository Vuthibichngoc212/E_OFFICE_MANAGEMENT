import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './themes/theme.d';
import './styles/index.styles.css';
import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={customTheme}>
				<AppRoute />
				<ToastContainer
					className="custom-toast-container"
					draggable
					// stacked
					closeOnClick
					autoClose={500}
					position="top-right"
				/>
				<CssBaseline />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
