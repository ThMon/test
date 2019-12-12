class About {
    constructor() {
        // Chemin vers la view HTML reliée à ce controlleur
        this.url = 'views/about.html';
    }

    /*
     * Code exécuté après l'injection de la vue about.html dans le DOM : 
     * il est donc possible installer des gestionnaires d'évènements sur la vue qui vient de se charger, etc.
     */
    executeHttpRequest() {
        // Pas de code particulier à exécuter.
        console.log("Hey! Bienvenue sur la page 'à propos'!");
    }
}


// La classe est exportée afin d'être accessible par d'autres modules.
export default About;