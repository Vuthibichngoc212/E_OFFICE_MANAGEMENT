import { useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from './Sidebar.styles';
import Logo from '@/assets/images/logo-sidebar.png';
import theme from '@/themes/theme.d';
import { useLocation } from 'react-router-dom';
import useCommonStore from '@/stores/common.stores';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useRouter from '@/router/routerHook';

const drawerWidth = 267;
const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: 'hidden',
	overflowY: 'auto'
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
	// const is425px = useMediaQuery('(max-width:425px)');
	const location = useLocation();
	const classes = useStyles();
	const { routes, sidebar, navigate, activeRoute, setActiveRoute } = useRouter();
	const { isOpenSidebar, setIsOpenSidebar, expanded, setExpanded } = useCommonStore();

	const filterSidebarRoutes = (routes: any) => {
		if (!routes) return [];
		return routes
			.map((route: any) => {
				if (route?.children && route?.children.length > 0) {
					const filteredChildren = filterSidebarRoutes(route.children);

					const routeHasPermission = !route.resource;
					if (filteredChildren.length > 0 || routeHasPermission) {
						return {
							...route,
							children: filteredChildren.length > 0 ? filteredChildren : undefined
						};
					}
					return null;
				} else {
					const routeHasPermission = !route.resource;
					return routeHasPermission ? route : null;
				}
			})
			.filter((route: null) => route !== null);
	};

	const handleExpansion = (label: any) => (_: any, isExpanded: any) => {
		setExpanded({
			...expanded,
			[label]: isExpanded
		});
	};

	useEffect(() => {
		setIsOpenSidebar(isOpenSidebar);
	}, [isOpenSidebar, setIsOpenSidebar]);

	useEffect(() => {
		let data: any = {
			path: '',
			label: ''
		};
		for (let i = 0; i < routes.length; i++) {
			const item = routes[i];
			if (item.path === location.pathname) {
				data = {
					path: item.path,
					label: item.label
				};
				break;
			}
			if (item.children && item.children.length > 0) {
				const regexString = `^${item.path}\\/([^\\/]+)$`;
				const regex = new RegExp(regexString);
				const isMappingRoute = regex.test(location.pathname);

				if (isMappingRoute) {
					const findRoute = item.children.find(
						(data: { path: string }) => data.path === location.pathname
					);
					data = {
						parentPath: item.path,
						childrenPath: findRoute?.path,
						label: item.label
					};
					break;
				}
			}
			data = {
				path: '',
				label: ''
			};
		}
		setActiveRoute({ ...data });
	}, [location, routes, setActiveRoute]);
	const handleDrawer = () => {
		setIsOpenSidebar(!isOpenSidebar);
		setExpanded(false);
	};
	return (
		<Box>
			<Drawer
				variant="permanent"
				open={isOpenSidebar}
				sx={{
					'&.MuiDrawer-root': {
						position: 'relative',
						'& >.MuiPaper-root': {
							overflowY: 'auto',
							height: '100vh',
							boxShadow:
								'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
							border: 'none',
							padding: isOpenSidebar ? '0rem 2.4rem 0 1.6rem' : 0,
							'& > div:first-of-type': {
								display: 'flex',
								justifyContent: 'center !important',
								alignItems: 'center',
								width: '100%',
								minHeight: isOpenSidebar ? '13.4rem' : '4.8rem',
								marginBottom: isOpenSidebar ? '0' : 0,
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
					<Box
						onClick={handleDrawer}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							'& img': { width: '100%' }
						}}
					>
						<img src={Logo} alt="logo" />
					</Box>
				</DrawerHeader>
				<Divider />
				{/*  */}
				<List>
					{filterSidebarRoutes(sidebar)
						.filter((value: any) => value?.children)
						?.map((primaryLevelItem: any) => {
							return (
								<Box key={primaryLevelItem.label}>
									{primaryLevelItem.name === 'System' && <Divider sx={{ m: '1.6rem 0' }} />}
									{primaryLevelItem.children && primaryLevelItem.children.length > 0 ? (
										<Accordion
											expanded={!!expanded[primaryLevelItem.label]}
											onChange={handleExpansion(primaryLevelItem.label)}
											sx={{
												'&.MuiAccordion-root': {
													boxShadow: 'none',
													background: 'none',
													'& .MuiAccordionSummary-root': {
														minHeight: '0',
														padding: '0.8rem 0.8rem 0.8rem 1.1rem',
														'&:hover': {
															backgroundColor: 'rgba(0, 0, 0, 0.04)',
															borderRadius: '0.8rem'
														},
														'& .MuiAccordionSummary-content': {
															margin: 0
														},
														'& .MuiAccordionSummary-expandIconWrapper': {
															display: isOpenSidebar ? 'block' : 'none'
														}
													},
													'& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
														minHeight: '4.8rem'
													},
													'& .MuiAccordionSummary-content.Mui-expanded': {
														margin: 0
													}
												}
											}}
										>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel1-content"
												id="panel1-header"
												sx={{
													'&.MuiAccordionSummary-root': {
														padding: 0
													}
												}}
											>
												<Box
													sx={{
														display: 'flex',
														width: '100%',
														alignItems: 'center',
														justifyContent: 'center',
														gap: '1.4rem'
													}}
												>
													<Box
														sx={{
															position: 'relative',
															right: !isOpenSidebar ? '0.4rem' : 0,
															top: '0.2rem'
														}}
													>
														<primaryLevelItem.icon />
													</Box>

													<ListItemText
														className={classes.itemTextRoot}
														sx={isOpenSidebar ? {} : { display: 'none' }}
														primary={primaryLevelItem.label}
													/>
												</Box>
											</AccordionSummary>
											<AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
												{primaryLevelItem.children.map((secondaryLevelItem: any) => {
													return (
														<Box key={secondaryLevelItem.label}>
															<ListItem
																onClick={() => {
																	navigate(secondaryLevelItem.path);
																	setIsOpenSidebar(true);
																}}
																disablePadding
																sx={{
																	display: 'block',
																	padding: '0.8rem  0.8rem 0.8rem 4.5rem',
																	borderRadius: '0.8rem',
																	backgroundColor:
																		activeRoute?.childrenPath === secondaryLevelItem.path
																			? theme.palette.primary.main
																			: '',
																	'& .MuiListItemText-root': {
																		'& .MuiTypography-root': {
																			color:
																				activeRoute?.childrenPath === secondaryLevelItem.path
																					? theme.palette.base.main
																					: '',
																			fontWeight:
																				activeRoute?.childrenPath === secondaryLevelItem.path
																					? 600
																					: 400
																		}
																	},
																	'&::after': {
																		content: '""',
																		position: 'absolute',
																		top: 14,
																		left: 19,
																		width: '0.2rem',
																		height: '1.8rem',
																		borderRadius: '0.8rem',
																		backgroundColor:
																			activeRoute?.childrenPath === secondaryLevelItem.path
																				? theme.palette.base.main
																				: theme.palette.primary.main
																	},
																	'& .MuiButtonBase-root.MuiListItemButton-root:hover': {
																		backgroundColor: 'rgb(255 255 255 / 4%)'
																	}
																}}
															>
																<ListItemButton
																	sx={{
																		padding: 0
																	}}
																>
																	<Box sx={{ display: 'flex' }}>
																		<ListItemText
																			className={classes.itemTextRoot}
																			primary={secondaryLevelItem.label}
																		/>
																	</Box>
																</ListItemButton>
															</ListItem>
														</Box>
													);
												})}
											</AccordionDetails>
										</Accordion>
									) : (
										<ListItem
											disablePadding
											sx={
												activeRoute?.path === primaryLevelItem.path
													? {
															backgroundColor: theme.palette.primary.main,
															color: theme.palette.base.main,
															borderRadius: '0.8rem',
															'& .MuiButtonBase-root': {
																'& .MuiListItemIcon-root': {
																	color: theme.palette.base.main
																},
																'& .MuiListItemText-root': {
																	'& .MuiTypography-root': {
																		color: theme.palette.base.main,
																		fontWeight: 600
																	}
																}
															}
														}
													: {}
											}
											onClick={() => {
												navigate(primaryLevelItem.path);
												setIsOpenSidebar(true);
											}}
										>
											<ListItemButton
												className={classes.listItemRoot}
												sx={{
													paddingLeft: isOpenSidebar ? '0px' : '10px',
													...(activeRoute?.path === primaryLevelItem.path
														? {
																'& path': {
																	fill: '#fff'
																}
															}
														: {})
												}}
											>
												<ListItemIcon>
													<primaryLevelItem.icon />
												</ListItemIcon>
												<ListItemText
													className={classes.itemTextRoot}
													primary={primaryLevelItem.label}
													sx={{ opacity: isOpenSidebar ? 1 : 0 }}
												/>
											</ListItemButton>
										</ListItem>
									)}
								</Box>
							);
						})}
				</List>
			</Drawer>
			<IconButton
				sx={{
					'&.MuiIconButton-root': {
						position: 'absolute',
						width: '2.4rem',
						height: '2.4rem',
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.neutral.main,
						bottom: '2.8rem',
						borderRadius: '0',
						transition: 'all 0.3s',
						left: isOpenSidebar ? '26.7rem' : '6.5rem',
						zIndex: 999,
						'&:hover': {
							backgroundColor: theme.palette.primary.main
						},
						'& .MuiSvgIcon-root': {
							width: '2rem',
							height: '2rem',
							position: 'relative',
							right: '0.01rem'
						}
					}
				}}
				onClick={handleDrawer}
			>
				{isOpenSidebar ? <ChevronLeftIcon /> : <ChevronRightIcon />}
			</IconButton>
		</Box>
	);
};

export default SideBar;
