import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Badge, Box, Stack } from '@mui/material';
import { adminMenu } from '../../helpers/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import LogoutTooltip from '../Tooltip/LogoutTooltip';
import DrawerHeader from './DrawerHeader';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { useLayoutEffect } from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

function CmsDrawer({ children }) {
	const theme = useTheme();
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const { state, dispatch } = useAppContext();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleNavClick = () => {

	}

	useLayoutEffect(() => {
		dispatch({ type: 'SET_IS_LOADING_PAGE', payload: true })
	}, [router.pathname])

	useEffect(() => {
		dispatch({ type: 'SET_IS_LOADING_PAGE', payload: false })
	}, [router.pathname])

	return (
		<>
			<Box sx={{ display: 'flex', background: 'rgb(250,250,250)' }}>
				<CssBaseline />
				<AppBar position="fixed" open={open}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{
								marginRight: 5,
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							sx={{ width: '100%', }}
						>
							<Typography variant="h6" noWrap component="div">
								Admin Panel
							</Typography>
							<Stack direction="row" spacing={1}>
								<IconButton sx={{ color: 'white' }}>
									<AppsIcon />
								</IconButton>
								<IconButton color="warning">
									<Badge
										variant="dot"
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}} color="error"
									>
										<NotificationsIcon />
									</Badge>
								</IconButton>
								<LogoutTooltip />
							</Stack>
						</Stack>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open} >
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List component="nav" sx={{ background: 'rgb(25,118,210)', height: '100%' }}>
						{adminMenu.map((menu) => (
							<Link href={menu.link} key={menu.title} onClick={handleNavClick}>
								<ListItem disablePadding sx={{ display: 'block', '& *': { color: 'white' } }} >
									<ListItemButton
										selected={router.pathname == menu.link}
										sx={{
											minHeight: 48,
											justifyContent: open ? 'initial' : 'center',
											px: 2.5,
											'&.Mui-selected': {
												backgroundColor: 'rgba(110, 235, 228,1)'
											},
											'&.Mui-focusVisible': {
												backgroundColor: 'red'
											},
											'&:hover': {
												backgroundColor: 'rgba(110, 235, 228,0.5)'
											}
										}}
									>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : 'auto',
												justifyContent: 'center',
											}}
										>
											<menu.Icon />
										</ListItemIcon>
										<ListItemText primary={menu.title} sx={{ opacity: open ? 1 : 0 }} />
									</ListItemButton>
								</ListItem>
							</Link>
						))}
					</List>
				</Drawer>
				<Box component="main"
					sx={{
						flexGrow: 1,
						p: { xs: 1, sm: 2, lg: 3 },
						width: '100vw'
					}}
				>
					<DrawerHeader />
					{state.isLoadingPage ? 'loading...' : children}
				</Box>
			</Box>
		</>
	);
}

CmsDrawer.propTypes = {
	children: PropTypes.array,
}
export default CmsDrawer