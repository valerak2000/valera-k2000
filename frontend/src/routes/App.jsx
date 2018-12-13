// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Loader from '../components/loaders';
import requireAuthentication from '../utils/requireAuthentication';

const HomePage = Loader(() =>
    import(/* webpackChunkName: "HomeView" */ '../containers/Home/Home/index.jsx')
);
const NotFoundPage = Loader(() =>
    import(/* webpackChunkName: "NotFoundView" */ '../containers/NotFound/index.jsx')
);
const UnderConstructPage = Loader(() =>
    import(/* webpackChunkName: "UnderConstructView" */ '../containers/UnderConstruct/index.jsx')
);
const LoginPage = Loader(() =>
    import(/* webpackChunkName: "LoginView" */ '../containers/Login/index.jsx')
);
const ProtectedPage = Loader(() =>
    import(/* webpackChunkName: "ProtectedView" */ '../containers/Protected/index.jsx')
);
const MapPage = Loader(() =>
    import(/* webpackChunkName: "MapView" */ '../containers/Map/index.jsx')
);

export default [
    {
        path: '/',
    	exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: HomePage
    },
    {
        path: '/protected',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: requireAuthentication(ProtectedPage)
    },
    {
        path: '/map',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: MapPage
    },
    {
        path: '/login',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: LoginPage
    },
    {
        component: NotFoundPage
    },
];

/*
*/
