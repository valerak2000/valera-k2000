import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '../../components/Card/CardHeaderImpl.jsx';

class MapView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Карта сайта'
                    { ...this.props }
                />
                <CardContent>
                    <div 
                        style = {{ 
                            display: 'block',
                            margin: '0 auto',
                        }}
                    >
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiMapView', flip: false, withTheme: true })(MapView);
/*
*/