/**
 * Retourne une chaîne de caractères dont la première lettre de
 * chaque mot est en majuscule et les autres lettres en minuscules.
 * @param {string} str
 * @returns string
 */
export function toTitleCase(str) {
	console.log(str);
	if (!str || typeof str !== "string") return "";
	// extraire chaque mot séparé d'un espace dans un tableau
	const splitStr = str.split(" ");
	// parcourir le tableau
	for (let i = 0; i < splitStr.length; i++) {
		// Changer la première lettre de chaque mot en majuscule et concaténer le reste du mot
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
	}

	const result = splitStr.join(" ");
	// renvoyer le tableau
	return result;
}
