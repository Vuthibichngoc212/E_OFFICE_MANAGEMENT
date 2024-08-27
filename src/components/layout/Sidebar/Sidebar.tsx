import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery
} from '@mui/material';
import Logo from '@/assets/images/logo-sidebar.png';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CopyrightMini from '@/components/common/Copyright/MiniCopyright';
import Divider from '@mui/material/Divider';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { useStyles } from './Sidebar.styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useRouter from '@/router/routerHook';
import theme from '@/themes/theme.d';
// import theme from '../../../themes/theme';

const drawerWidth = 267;
const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`
	}
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme)
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme)
		})
	})
);

const SideBar = () => {
	const is425px = useMediaQuery('(max-width:425px)');
	const location = useLocation();
	const classes = useStyles();
	const { routes, sidebar, navigate, activeRoute, setActiveRoute } = useRouter();
	const [open, setOpen] = useState(() => (!is425px ? true : false));
	useEffect(() => {
		let pathName = '';
		for (let i = 0; i < routes.length; i++) {
			const item = routes[i];
			if (item.path === location.pathname) {
				pathName = item.path;
				break;
			}

			if (item.children && item.children.length > 0) {
				const a = item.children.find(() => {
					const regexString = `^${item.path}\\/([^\\/]+)$`;
					const regex = new RegExp(regexString);

					return regex.test(location.pathname);
				});

				if (a) {
					pathName = item.path;
					break;
				}
			}

			pathName = '';
		}
		setActiveRoute({ path: pathName });
	}, [location, routes, setActiveRoute]);
	const handleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box>
			<Drawer
				variant="permanent"
				open={open}
				sx={{
					'&.MuiDrawer-root': {
						position: 'relative',
						'& >.MuiPaper-root': {
							overflow: 'visible',
							boxShadow:
								'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
							border: 'none',
							padding: open ? '2.4rem 2.4rem 0 2.4rem' : 0,
							'& > div:first-of-type': {
								display: 'flex',
								justifyContent: 'center !important',
								alignItems: 'center',
								width: '100%',
								marginBottom: open ? '2.2rem' : 0,
								'& .MuiBox-root': {
									width: '66%',
									'& img': {
										width: '100%'
									}
								}
							}
						}
					}
				}}
			>
				<DrawerHeader>
					<Box onClick={handleDrawer}>
						<img src={Logo} alt="logo" />
					</Box>
				</DrawerHeader>
				<Divider />
				<List>
					{sidebar?.map((data) => {
						if (data.name === 'profile') return;
						return (
							<Box
								key={data.label}
								sx={
									activeRoute?.path === data.path || location.pathname === data.path
										? {
												backgroundColor: theme.palette.primary.main,
												color: theme.palette.neutral.main,
												borderRadius: '0.8rem',
												'& .MuiButtonBase-root': {
													'& .MuiListItemIcon-root': {
														color: theme.palette.neutral.main
													},
													'& .MuiListItemText-root': {
														'& .MuiTypography-root': {
															color: theme.palette.neutral.main
														}
													}
												}
											}
										: {}
								}
							>
								<ListItem
									disablePadding
									sx={{ display: 'block' }}
									onClick={() => navigate(data.path)}
								>
									<ListItemButton
										className={classes.listItemRoot}
										sx={{
											paddingLeft: open ? '0px' : '10px',
											...(activeRoute?.path === data.path || location.pathname === data.path
												? {
														'& path': {
															fill: 'white'
														}
													}
												: {})
										}}
									>
										<ListItemIcon>
											<data.icon />
										</ListItemIcon>
										<ListItemText
											className={classes.itemTextRoot}
											primary={data.name}
											sx={{ opacity: open ? 1 : 0 }}
										/>
									</ListItemButton>
								</ListItem>
								{data.label === 'permissions' && <Divider />}
							</Box>
						);
					})}
				</List>
				<Box className={classes.sidebarFooter}>
					<CopyrightMini />
				</Box>
				<IconButton className={classes.iconButtonRoot} onClick={handleDrawer}>
					{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</Drawer>
		</Box>
	);
};

export default SideBar;
