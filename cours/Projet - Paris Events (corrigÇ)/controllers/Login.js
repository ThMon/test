import app from '../app/app.js'

class Login {
    constructor() {
        // Chemin vers la view HTML reliée à ce controlleur
        this.url = 'views/login.html';
    }

    /*
     * Code exécuté après l'injection de la vue about.html dans le DOM : 
     * il est donc possible installer des gestionnaires d'évènements sur la vue qui vient de se charger, etc.
     */
    executeHttpRequest() {
        // La méthode "onClick" est un raccourci vers addEventListener, écrit dans "app.js"
        app.dom.onClick('#githubLogin', function(event) {
            event.preventDefault();

            // Création d'un provider de type GithubAuthProvider()
            const provider = new firebase.auth.GithubAuthProvider();

            /*
             * Déclenche une ouverture de popup d'authentification via Github.
             * Tout le processus est ensuite automatiquement géré par le service "Authenticate" de Firebase,
             * et ce, jusqu'à ce que l'utilisateur autorise ou non l'authentification :
             *  Si il l'autorise, on passe dans le .then()
             *  Si il la refuse, on passe dans le .catch()
             */
            firebase.auth().signInWithPopup(provider).then(result => {
                const { displayName, photoURL } = result.user; // Extraction du nom (displayName) et de l'image (photoURL) du compte github de l'utilisateur

                // Remplace le lien de connexion à droite de la navbar par les innfos de l'utilisateur
                document.querySelector('.nav-item:last-child').innerHTML = `Bienvenue <strong>${displayName}</strong> !
                <img src="${photoURL}" alt="${displayName}" class="img-thumbnail">`;

                // Redirection vers la page d'accueil de l'application, via la méthode utilitaire "redirectTo" définie dans "app.js"
                app.mvc.redirectTo('/#/');

            }).catch(error => console.error(error));
        });
    }
}


// La classe est exportée afin d'être accessible par d'autres modules.
export default Login;