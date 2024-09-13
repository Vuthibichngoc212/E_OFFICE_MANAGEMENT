// Header.jsx

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon, MenuItem, Stack } from '@mui/material';
import Img from '@/assets/images/Rectangle77.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import useRouter from '@/router/routerHook';
import useStyles from './Header.styles';
// import Breadcrumb from '@/components/atoms/Breadcrumb/Breadcrumb';

const settings = [
	{ label: 'Trang cá nhân', icon: <PeopleAltOutlinedIcon />, path: '/profile' },
	{ label: 'Đăng xuất', icon: <LogoutIcon /> }
];

const Header = () => {
	const { navigate } = useRouter();
	const classes = useStyles();

	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" className={classes.root}>
			<Stack
				sx={{
					width: '100%'
				}}
			>
				<Toolbar className={classes.container}>
					<Box>
						<Typography variant="title2" className={classes.title} noWrap>
							PHX Smart School
						</Typography>
						<Stack
							direction={{ sx: 'column', sm: 'row' }}
							alignItems={{ sx: 'center', sm: 'center' }}
						></Stack>
					</Box>

					<Box className={classes.userStack}>
						<Stack
							onClick={handleOpenUserMenu}
							direction="row"
							justifyContent="center"
							alignItems="center"
							className={classes.userStack}
						>
							<Avatar alt="Logo" src={Img} className={classes.userName} />
							<Typography variant="body4" className={classes.userName} noWrap>
								PHX Smart School
							</Typography>
							<KeyboardArrowDownIcon className={classes.userName} />
						</Stack>
						<Menu
							className={classes.userMenu}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting.label}
									onClick={() => {
										if (setting.path === '/profile') {
											navigate('/profile');
										}
										handleCloseUserMenu();
									}}
									className={classes.menuItem}
								>
									<ListItemIcon className={classes.menuItemIcon}>{setting.icon}</ListItemIcon>
									<Typography variant="body4" className={classes.menuItemText}>
										{setting.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Stack>
		</AppBar>
	);
};

export default Header;
