import { Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Header = () => {
	const [count, setCount] = useState(0);
	const onPressIncrement = () => {
		setCount(count + 1);
	};
	useEffect(() => {
		console.log('hihi', 'rerender');
	});
	return (
		<Container>
			<Typography variant={'h1'}>Đây là Header</Typography>
			<Typography variant={'h2'}>Count: {count}</Typography>
			<Button variant={'contained'} onClick={onPressIncrement}>
				Increment
			</Button>
		</Container>
	);
};

export default Header;
