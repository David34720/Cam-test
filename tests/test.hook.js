import { createServer } from 'node:http';
import { sequelize } from '../src/models/associations.js';
import { app } from '../src/app.js';

// Problème 1 : il faut lancer le SERVEUR manuellement avant de pouvoir lancer les tests
// ✅ Solution 1 : faire en sorte que les tests démarre un serveur de test sur le port 7357

// Problème 2 : nos tests communiquent avec notre BDD de développement (okanban)
// ✅ Solution 2 : on va créer une BDD dédiée de test (okanbantest) que l'on videra entre chaque test

// Problème 3 : comment charger les variables d'environnement pour nous connecter à cette BDD de test ?
// ✅ Solution 3 : utiliser dotenv (dans le fichier test.env.js, chargé avant celui-ci) pour charger les variables définies dans le fichier .env.test

// ajouter dans package.json // "test": "mocha --recursive ./src/**/*.test.js --require test/test.env.js --require test/test.hook.js",

let server;

export const mochaHooks = {
    // Fonction qui se lance avant l'ensemble des tests
    async beforeAll() {
        // On créer les tables dans la BDD de test
        await sequelize.sync();

        // On créé et lance un server HTTP de test
        server = createServer(app);
        server.listen(process.env.PORT);
    },

    // Fonction qui se lance après l'ensemble des tests
    async afterAll() {
        // On ferme le serveur de test
        await server.close();

        // On supprime toutes les tables de la BDD
        await sequelize.drop({ cascade: true, force: true });

        // On ferme le tunnel de connexion vers notre BDD Postgres de test
        await sequelize.close();
    },

    // Fonction qui se lance entre chaque test
    async beforeEach() {
        // On vide les tables (supprimer les enregistrement tout en gardant la structure de ces tables)
        await sequelize.truncate({ cascade: true, force: true });
    },
};
