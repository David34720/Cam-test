// ? commande à mettre dans package.json quand on veut tester avec jest : "test": " node --experimental-vm-modules node_modules/jest/bin/jest.js"
import { sum } from '../sandbox/sum.js';

describe('sum should be defined and perform additions', () => {
    // ? test est un alias de it
    test('sum should be defined', () => {
        expect(sum).toBeDefined();
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 3)).toBe(4);
        expect(sum(1, 2)).toBe(3);

        expect(sum(1, 2)).not.toBe(6);
    });
});
