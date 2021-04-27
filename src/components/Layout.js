import React from 'react';

import {
	Drawer,
	makeStyles,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	AppBar,
	Toolbar,
	Avatar,
} from '@material-ui/core';
import {AddCircleOutlineOutlined, SubjectOutlined} from '@material-ui/icons';
import {useHistory, useLocation} from 'react-router';

import {format} from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
	return {
		root: {
			display: 'flex',
		},
		page: {
			background: '#f9f9f9',
			width: '100%',
			padding: theme.spacing(3),
		},
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
			backgroundColor: '#8981D8',
			color: '#fff',
		},
		active: {
			background: '#6A61C0',
		},
		title: {
			padding: theme.spacing(2),
			backgroundColor: '#6A61C0',
			color: '#fff',
		},
		icon: {
			color: '#fff',
		},
		appbar: {
			backgroundColor: '#F8F8FD',
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		toolbar: theme.mixins.toolbar,
		date: {
			flexGrow: 1,
		},
		avatar: {
			marginLeft: theme.spacing(2),
		},
	};
});

export default function Layout({children}) {
	const classes = useStyles();

	const history = useHistory();
	const location = useLocation();

	const menuItems = [
		{
			text: 'My Notes',
			icon: <SubjectOutlined color="primary" />,
			path: '/',
		},
		{
			text: 'Create Notes',
			icon: <AddCircleOutlineOutlined color="primary" />,
			path: '/create',
		},
	];

	return (
		<div className={classes.root}>
			{/* app bar */}
			<AppBar className={classes.appbar} elevation={1}>
				<Toolbar>
					<Typography className={classes.date}>
						📅 Today is the {format(new Date(), 'do MMMM Y')}
					</Typography>
					<Typography>Klayver Ximenes</Typography>
					<Avatar src="/img.jpg" className={classes.avatar} />
				</Toolbar>
			</AppBar>

			{/* side drawer */}
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				classes={{paper: classes.drawerPaper}}
			>
				<div>
					<Typography variant="h5" className={classes.title}>
						Klayver Notes 📝
					</Typography>
				</div>

				{/* list / links */}
				<List>
					{menuItems.map(item => (
						<ListItem
							button
							onClick={() => history.push(item.path)}
							className={
								location.pathname === item.path
									? classes.active
									: null
							}
							key={item.text}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText>{item.text}</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	);
}
