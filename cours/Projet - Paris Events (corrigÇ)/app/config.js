// --------------------------------------------------------------------------------------------------------------------
// CONFIGURATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

const config = {
    // Configuration de la plateforme Firebase
    firebase: {
        apiKey            : "XXXXXXXXXXXXXXXXXXXX",
        authDomain        : "XXXXXXXXXXXXXXXXXXXX",
        databaseURL       : "XXXXXXXXXXXXXXXXXXXX",
        projectId         : "XXXXXXXXXXXXXXXXXXXX",
        storageBucket     : "XXXXXXXXXXXXXXXXXXXX",
        messagingSenderId : "XXXXXXXXXXXXXXXXXXXX",
    },

    // Configuration de l'API OpenData
    openDataURL: 'https://opendata.paris.fr/api/records/1.0/search/'
};


// La configuration est exportée afin d'être accessible par d'autres modules.
export default config;