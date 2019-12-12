import app from '../app/app.js';
import EventModel from '../models/EventModel.js';

class Search {
    constructor() {
        // Chemin vers la view HTML reliée à ce controlleur
        this.url = 'views/search.html';
    }

    /*
     * Code exécuté après l'injection de la vue about.html dans le DOM : 
     * il est donc possible installer des gestionnaires d'évènements sur la vue qui vient de se charger, etc.
     */
    executeHttpRequest() {
        // Ajouter un eventlistener "submit" sur le formulaire
        document.getElementById('formSearch').addEventListener('submit', event => {
            event.preventDefault(); // Empêche la validation du formulaire par le navigateur

            let params = app.dom.getFormFieldValues('q', 'sortBy', 'dateStart');
            console.log('params = ', params);

            this.search(params);
        });
    }

    /*
     * Méthode permettant de lancer une recherche via l'EventModel
     */
    search(params = {}) {
        let eventModel = new EventModel();

        eventModel.listAll(params.q, params.dateStart, params.sortBy).then(function (events) {
            console.log('Les événements récupérés sont', events);
            app.dom.renderTemplateCopies('#event-template', '.event-list', events, function (copy, event) {
                copy.querySelector('.event-image').src = event.image;
                copy.querySelector('.event-title').textContent = event.title;
            });

            /* OU :

                let html = '';
                events.forEach(event => {
                    html += `<div class="col">
                                <h6 class="event-title">${event.title}</h6>
                                <img class="event-image" src="${event.image}">
                            </div>`;
                });
                document.querySelector('.event-list').innerHTML = html;

            */
        }).catch(err => alert(err.message || err));
    }
}


// La classe est exportée afin d'être accessible par d'autres modules.
export default Search;