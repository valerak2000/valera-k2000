import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
//import Divider from '@material-ui/core/Divider';
//import Badge from '@material-ui/core/Badge';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
//import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
//import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

import { authLogoutAndRedirect } from '../actions/auth';

const styles = theme => ({
    icon: {
//      margin: theme.spacing.unit,
      fontSize: 18,
    },
});
  
/*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
export function Login(props) {
    return (
        <Button
            focusRipple = { false }
            aria-label = 'Войти'
            aria-selected = { false }
            centerRipple = { false }
            disableRipple = { true }
            disableTouchRipple = { true }
            component = { Link } to = { props.link }
            style = { props.style.button }
        >
            Войти    
            <FontAwesomeIcon
                icon = { faSignInAlt }
                style = { props.style.button.icon }
            />
        </Button>
    );
}

export function Logged(props) {
    return (
        <div></div>
    );
}
/*
*/

class LoginControl extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleProtectedClick = this.handleProtectedClick.bind(this);
    }

    static defaultProps = {
        userName: '',
    };

    state = {
        isAuthenticated: false
    };

    handleLogoutClick = (e) => {
        e.preventDefault();
        this.props.dispatch(authLogoutAndRedirect());
    };

    handleProtectedClick = (e) => {
        e.preventDefault();
        this.props.dispatch(push('/protected'));
    };

    render() {
        const { classes } = this.props;
        const { isAuthenticated, userName } = this.props;
        const login = this.props.theme.app.header.appBar.login;

        return (
            <span
                style = { login }
            >
                <span
                    style = { login.badge }
                >
                    <FontAwesomeIcon
                        icon = { faPhone }
                        flip = 'horizontal'
                        style = {{ fontSize: 12, }}

                    />
                    <span
                        style = {{ fontWeight: 700, }}
                    >
                        &nbsp;+7 (918) 480-5486
                    </span>
                </span>
                {
                    isAuthenticated ? (
                        <Logged
                            userName = { userName }
                            onClickLogout = { this.handleLogoutClick }
                            onClickProtected = { this.handleProtectedClick }
                            style = { login.button }
                            { ...this.props }
                        />
                    ) : (
                        <Login
                            link = ''
                            style = { login.button }
                            { ...this.props }
                        />
                    )
                }
            </span>
        );
    }
}
/*
                            link = '/login'
            <Badge
                id = 'LoginControl'
                badgeContent = {
                    <div>
                        <span style = {{ fontWeight: 100, }}>Круглосуточный диспетчер:</span>
                        <span style = {{ fontWeight: 700, }}> 8 (86156) 35-117</span>
                    </div>
                }
                badge = {{ fontWeight: 100, }}
                style = { login.badge }
            >
            {
                isAuthenticated ? (
                    <Logged
                        userName = { userName }
                        onClickLogout = { this.handleLogoutClick }
                        onClickProtected = { this.handleProtectedClick }
                        style = { login }
                        { ...this.props }
                    />
                ) : (
                    <Login
                        onClick = { this.handleLoginClick }
                        style = { login }
                        { ...this.props }
                    />
                )
            }
            </Badge>

            <Badge
                id = 'LoginControl'
                badgeContent = {
                    <div>
                        <span style = {{ fontWeight: 100, }}>Круглосуточный диспетчер:</span>
                        <span style = {{ fontWeight: 700, }}> 8 (86156) 35-117</span>
                    </div>
                }
                badgeStyle = { badge }
            >
            {
                isAuthenticated ? (
                    <Logged
                        userName = { userName }
                        onClickLogout = { this.handleLogoutClick }
                        onClickProtected = { this.handleProtectedClick }
                        style = { login }
                    />
                ) : (
                    <Login
                        onClick = { this.handleLoginClick }
                        style = { login }
                    />
                )
            }
            </Badge>
*/

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.auth.userName,
    };
};

export default withStyles(styles, { name: 'LoginControl', flip: false, withTheme: true })(connect(mapStateToProps)(LoginControl));
