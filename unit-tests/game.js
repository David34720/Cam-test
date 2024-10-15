export function calcXp(level) {
	let xp = 0;
	let levelCalc = level;
	if (levelCalc > 200) {
		xp += Math.trunc((levelCalc - 200) / 5);
		levelCalc = levelCalc - (levelCalc - 200);
	}

	if (levelCalc > 100) {
		xp += Math.trunc((levelCalc - 100) / 3);
		levelCalc = levelCalc - (levelCalc - 100);
	}

	if (levelCalc > 50) {
		xp += Math.trunc((levelCalc - 50) / 2);
		levelCalc = levelCalc - (levelCalc - 50);
	}

	if (levelCalc > 0) {
		xp += levelCalc;
	}

	Math.trunc(xp);
	return xp;
}
