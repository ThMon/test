import config from '../app/config.js';

class EventModel{
    listAll(q = '', dateStart = new Date().getFullYear(), sortBy = '') {

        // Exécute une requête HTTP GET sur l'API OpenData pour récupérer les données.
        return fetch(`${config.openDataURL}?dataset=evenements-a-paris&sort=${sortBy}&refine.date_start=${dateStart}&q=${encodeURIComponent(q)}`)
                    .then(response => response.json()) // Transforme la réponse au format JSON ...
                    .then(openData => {

                        /*
                        * Documentation de l'API OpenData :
                        * https://opendata.paris.fr/explore/dataset/evenements-a-paris/api
                        */

                        let events = openData.records
                                        .map(record => record.fields) // Dans le set de données récupérées, ne nous intéressent que la clé "fields" qui est un Object
                                        .map(field => {
                                            // Dans chaque objet "field", on ne choisit finalement que de prendre le titre et l'image,
                                            // Donc on renvoie un nouvel objet litéral avec seulement 2 clés "title" et "image"
                                            return {
                                                title : field.title ? field.title.replace('&amp;', '&') : 'Événement sans titre',
                                                image : field.image || 'static/images/subtle-grey.png'
                                            }
                                        });
                        // Renvoi des évènements trouvés.
                        return events;
                    });
    }
}

// La classe est exportée afin d'être accessible par d'autres modules.
export default EventModel;