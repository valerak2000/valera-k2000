import React from 'react';
import Home from '@material-ui/icons/Home';
import RssFeed from '@material-ui/icons/RssFeed';
import Announcement from '@material-ui/icons/Announcement';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import ContactMail from '@material-ui/icons/ContactMail';
import Place from '@material-ui/icons/Place';
import Map from '@material-ui/icons/Map';

export const MENU_HOME = [
    {
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<Home />),
        dataRoute: '/',
    },
    {
        key: 'map',
        primaryText: 'Карта сайта',
        leftIcon: (<Map />),
        dataRoute: '/map',
    },
];

export const MENU_ABOUT = [
];

export const MENU_CUSTOMERS = [
];

export const MENU_NEWS = [
    {
        key: 'news',
        primaryText: 'Новости',
        leftIcon: (<RssFeed />),
        dataRoute: '/news',
    },
];
