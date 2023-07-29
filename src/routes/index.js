//Layout
import { HeaderOnly } from '~/components/Layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Updload from '~/pages/Upload';
import Search from '~/pages/Search';

//public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Updload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
