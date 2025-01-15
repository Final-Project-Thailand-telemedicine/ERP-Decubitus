import { faHouse, faUser ,faChartSimple,faSignOut, faFemale} from '@fortawesome/free-solid-svg-icons';

export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: faHouse,
        label: 'Dashboard'
    },
    // {
    //     routeLink: 'table',
    //     icon: faChartSimple,
    //     label: 'Table'
    // },
    {
        routeLink: 'patients',
        icon: faUser,
        label: 'Patients'
    },
    {
        routeLink: 'nurses',
        icon: faFemale,
        label: 'Nurses'
    },
    {
        routeLink: 'login',
        icon: faSignOut,
        label: 'Login'
    },
];