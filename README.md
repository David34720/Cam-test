# Challenge tests

## Échauffement : tests unitaires

### Exercice 1 : `toTitleCase(str)`

Le répertoire `unit-tests` contient trois fichiers :

- `toTitleCase.js` : contient la déclaration d'une fonction permettant de passer en majuscule la première lettre de chaque mot d'une chaîne de caractères
- `toTitleCase.unit.test.js` : fichier des tests unitaires de la fonction `toTitleCase()` avec un test déjà écrit
- `toTitleCase.correction.s` : deux propositions de correction de la fonction : à ne pas regarder maintenant !

À faire :

- implémenter la fonction
- implémenter les cas de tests permettant de valider le bon fonctionnement de la fonction. Voici quelques exemples de cas à tester :
  - `toTitleCase("oclock")` doit renvoyer `"Oclock`
  - `toTitleCase("oCL0ck!")` doit renvoyer `"Ocl0ck!"`
  - `toTitleCase("")` doit renvoyer `""`
  - `toTitleCase("Hello world")` doit renvoyer `"Hello World"`
  - `toTitleCase("BONJOUR MONDE")` doit renvoyer `"Bonjour Monde"`
  - `toTitleCase("Mais qu'est-ce qu'il se passe ici ?")` doit renvoyer `"Mais Qu'est-ce Qu'il Se Passe Ici ?"`

Pour lancer les tests automatisés écrits avec `node:test` et `node:assert`, il suffit de lancer `node <chemin_vers_le_fichier_de_test.js>` (donc `node unit-tests/toTitleCase.unit.test.js`).

<details><summary>Besoin d'un coup de main ?</summary>

Dans la fonction on doit :

- vérifier qu'il y a une chaîne de caractères
- passer la chaîne de caractères en minuscules
- séparer chaque mot de la chaîne de caractères
- passer la première lettre de chaque mot en majuscule
- retourner une chaîne avec l'ensemble des mots

<details><summary>Ça ne marche pas ?</summary>

Tu peux regarder les fonctions du fichier `toTitleCase.correction.js` et copier
le code d'une fonction dans ton fichier.

</details>

</details>

### Bonus tests unitaires : `computeStrength(level)`

Toujours dans le répertoire `unit-tests`, créer un fichier `game.js` puis écrire une fonction `computeStrength(level)` qui calcule le nombre de points de force d'un hypothétique personnage de jeu vidéo, à partir de son niveau.

Cette fonction prend en paramètre un nombre entier positif (`level` : le niveau du personnage) et retourne un nombre entier positif (la force du personnage).

Mais la force n'est pas linéaire au niveau !

- du niveau 1 au niveau 50, le personnage gagne 1 point de force TOUS LES NIVEAUX
- du niveau 51 au niveau 100, le personnage gagne 1 point de force TOUS LES **2** NIVEAUX
- du niveau 101 au niveau 200, le personnage gagne 1 point de force TOUS LES **3** NIVEAUX
- à partir du niveau 201, le personnage gagne 1 point de force TOUS LES **5** NIVEAUX.

Par exemple :

- au niveau 1, le personnage à 1 point de force
- au niveau 50, le personnage à 50 points de force
- au niveau 51, le personnage à 50 points de force
- au niveau 52, le personnage à 51 points de force (50 + 1)
- au niveau 100, le personnage à 75 points de force (50 + 25)
- au niveau 101, le personnage à 75 points de force
- au niveau 200, le personnage à 108 points de force (50 + 25 + 33)
- au niveau 201, le personnage à 108 points de force
- au niveau 205, le personnage à 109 points de force (50 + 25 + 33 + 1)
- au niveau 500, le personnage à 168 points de force (50 + 25 + 33 + 60)

Implémenter cette fonction et ses tests.

<details><summary>Un peu d'aide ?</summary>

Si le personnage est au niveau 55 :

- il gagne 1 point tous les 2 niveaux entre 50 et 55 :
  - car on nous dit que c'est à partir du niveau 52 qu'il gagne 1 point
  - donc entre 50 et 55, il gagne :
    - 55 - 50 = 5
    - 5 / 2 = 2,5
    - partie entière : 2 points

- sur les niveaux 0 à 50, il gagne 50 points
- au total, il gagne donc 50 + 2 = 52 points au niveau 55.

La fonction [Math.trunc()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) peut aider !

<details><summary>On ne reste pas bloqué !</summary>

```js
/**
 * Retourne le nombre de points selon le niveau.
 * @param {number} level
 * @returns number
 */
export function computeStrength(level) {
  // nombre de points
  let points = 0;

  // sur les niveaux supérieurs à 200
  // par exemple level = 205
  if (level > 200) {
    // le personnage gagne 1 point tous les 5 niveaux
    // on calcul le nombre de niveaux au dessus de 200
    //  - level - 200
    //  - on divise le résultat par 5 (1 point tous les 5 niveaux)
    //  - on récupère la partie entière
    // par exemple (205 - 200) = 5, 5 / 5 = 1
    points += Math.trunc((level - 200) / 5);
    // on met à jour le niveau pour poursuivre le calcul
    // par exemple 205 - 200 = 5, level = 205 - 5 = 200
    level -= (level - 200);
  }

  if (level > 100) {
    points += Math.trunc((level - 100) / 3);
    level -= (level - 100);
  }

  if (level > 50) {
    points += Math.trunc((level - 50) / 2);
    level -= (level - 50);
  }

  // ici il reste au maximum level = 50
  points += level;

  return points;
}
```

</details>

</details>

## O'kanban : tests d'intégration

### Mise en place de l'environnement

#### `listController` : la suite

Maintenant que l'on a la possibilité de créer des objets Response (et Request !), que l'on a un jeu de données de tests, on peut y aller et tester :

- `getOneList`
- `createList`
- `updateList`
- `deleteList`

#### `*Controller`

Sur le même modèle, vous pouvez créer les tests pour `cardController` puis `tagController` !

### Bonus

> **:warning: Mode super découverte !**

On n'a pas vraiment de fonctions isolées dans notre application. C'est pour cela que l'on a fait des tests unitaires sur d'autres fonctions.
Si vous voulez vraiment faire un test unitaire dans la partie `api`, vous pouvez vous y essayer sur `src/middlewares/body-sanitizer.js`.

Par contre nous avons fait des vrais tests d'intégration sur nos contrôleurs !

Il est aussi possible de faire des tests bout en bout (e2e) depuis la partie front...

Pour cela [Cypress](https://www.cypress.io/) (et sa doc) est votre ami :

- la doc d'installation est par là : <https://docs.cypress.io/guides/getting-started/installing-cypress>.
- ensuite la doc de démarrage se trouve ici : <https://docs.cypress.io/guides/getting-started/opening-the-app>.

Good luck !
