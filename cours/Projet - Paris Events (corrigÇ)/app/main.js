import app from './app.js';

import config from './config.js';

import About from '../controllers/About.js';
import Home from '../controllers/Home.js';
import Search from '../controllers/Search.js';
import Login from '../controllers/Login.js';

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
    // Instanciation du Vanilla Router, en mode hash dans l'URL : /#/<route>
    app.mvc.router = new Router({
        mode: 'hash',
        root: '/index.html'
    });

    // Définition des différentes routes disponibles
    app.mvc.router
        .add('/', () => app.mvc.dispatchRoute(new Home()))
        .add('/search', () => app.mvc.dispatchRoute(new Search()))
        .add('/about', () => app.mvc.dispatchRoute(new About()))
        .add('/login', () => app.mvc.dispatchRoute(new Login()));

    // Synchronisation puis activation du routeur (c.f. https://www.npmjs.com/package/vanilla-router#addurilistener)
    app.mvc.router.check().addUriListener();
}


// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du routeur.
    initializeRouter();

    // Initialisation de l'application Firebase
    firebase.initializeApp(config.firebase);
});