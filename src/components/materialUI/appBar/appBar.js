import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Home from 'material-ui/svg-icons/action/home';
import Explore from 'material-ui/svg-icons/action/explore';
import Notification from 'material-ui/svg-icons/social/notifications';
import { ListItem } from 'material-ui/List';

import { deepOrange400, indigoA100, cyan900, orange700, teal300} from 'material-ui/styles/colors';


class appBar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <AppBar
                    title="Welcome to Material UI"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onClick={this.handleToggle}
                />


                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MenuItem onClick={this.handleClose}>
                        <ListItem primaryText="Home" leftIcon={<Home color={deepOrange400} />} />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <ListItem primaryText="Dashboard" leftIcon={<ActionDashboard color={indigoA100} />} />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <ListItem primaryText="Explore" leftIcon={<Explore color={cyan900}/>} />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <ListItem primaryText="Inbox" leftIcon={<ContentInbox color={orange700} />} />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <ListItem primaryText="Notifications" leftIcon={<Notification color={teal300}/>} />
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default appBar;