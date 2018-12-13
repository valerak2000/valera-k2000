import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    media: {
        boxShadow: '',
        width: '40%',
        //height: 277,
        objectFit: 'contain',
        margin: '0 auto',
        backgroundSize: 'contain',
    },
    text: {
        margin: '0.25rem auto 0.25rem 2rem',
    },
    header: {
        paddingBottom: 0,
    },
});
  
class HomeView extends Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    state = {
        activeStep: 0,
    };

    /*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
    componentDidCatch(error, info) {
        /* Example stack information:
           in ComponentThatThrows (created by App)
           in ErrorBoundary (created by App)
           in div (created by App)
           in App
        */
        console.log(info.componentStack);
    }

    render() {
        const { card } = this.props.theme.app;
        const { classes, theme } = this.props;
    
        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Козлитин Валерий'
                    { ...this.props }
                />
                <CardHeader
                    subheader = 'Разработка приложений (Java, Python, SQL), сайтов (Spring, React), поддержка 1С'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default withStyles(styles, { name: 'muiHomeView', flip: false, withTheme: true })(connect(mapStateToProps)(HomeView));

/*
*/