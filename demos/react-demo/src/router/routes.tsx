import { MuiPage, SvgPage, FontPage } from '../pages';
import Home from '@mui/icons-material/Home';

export const PAGES = [
    {
        title: 'MUI',
        route: 'mui',
        component: MuiPage,
        icon: Home,
    },
    {
        title: 'SVG',
        route: 'svg',
        component: SvgPage,
        icon: Home,
    },
    {
        title: 'Font',
        route: 'font',
        component: FontPage,
        icon: Home,
    },
];
