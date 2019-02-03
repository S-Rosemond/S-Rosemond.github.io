import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
	AppBar,
	Button,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
	withStyles
} from '@material-ui/core/';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Menu, Close } from '@material-ui/icons/';

import { SideBar } from './sideList';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex'
	},
	grow: { flexGrow: 1 },
	appBar: {
		display: 'flex',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	buttons: {
		color: '#fff',
		backgroundColor: '#ff8400',
		margin: '0 5px'
	},
	buttonsToolBar: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		backgroundColor: '#da4444',
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
});

class PersistentDrawerLeft extends React.Component {
	state = {
		open: false
	};

	handleDrawerClose = () => {
		this.setState(state => ({ open: !state.open }));
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerClose}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6" color="secondary" noWrap style={{ fontFamily: 'ultra' }}>
							WILD TIGER THAI
						</Typography>
						<div className={classes.grow} />

						<Hidden xsDown>
							<Toolbar className={classes.buttonsToolBar}>
								<Button className={classes.buttons} onClick={this.handleDrawerClose}>
									Home
								</Button>
								<Button className={classes.buttons} onClick={this.handleDrawerClose}>
									Menu
								</Button>
								<Button className={classes.buttons} onClick={this.handleDrawerClose}>
									Dessert
								</Button>
								<Button className={classes.buttons} onClick={this.handleDrawerClose}>
									Beverages
								</Button>
							</Toolbar>
						</Hidden>
					</Toolbar>
				</AppBar>

				<Drawer
					className={classes.drawer}
					variant="temporary"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
					onClose={this.handleDrawerClose}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === 'ltr' && <Close />}
						</IconButton>
					</div>
					<Divider />
					<SideBar />
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div />
				</main>
			</div>
		);
	}
}

PersistentDrawerLeft.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);