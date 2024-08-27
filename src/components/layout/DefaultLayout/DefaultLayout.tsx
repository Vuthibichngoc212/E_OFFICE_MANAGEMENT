import { Footer } from '@/components/layout';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const DefaultLayout = () => {
	return (
		<Container>
			<Outlet />
			<Footer />
		</Container>
	);
};

export default DefaultLayout;
