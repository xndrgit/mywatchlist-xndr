// importiamo vue-router
import VueRouter from 'vue-router';

// importiamo le singole pagine
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';

import HomePage from "./pages/HomePage.vue";
import MoviesPage from "./pages/MoviesPage.vue";
import SeriesPage from "./pages/SeriesPage.vue";

// per ogni pagina avrò: path (uri) name (by name class), component
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/movies',
            name: 'movies',
            component: MoviesPage
        },
        {
            path: '/series',
            name: 'series',
            component: SeriesPage
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
    ],
});


// sta esportando a chiunque lo chiami router
export default router;
