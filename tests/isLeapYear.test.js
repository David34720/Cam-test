// ! on ne peut pas tester ce fichier avec npm test, car on utilise le test runner de node ici
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isLeapYear } from '../sandbox/isLeapYear.js';

describe('isLeapYear should detect leap years', () => {
    //
    it('should return true if year is leap', () => {
        assert.equal(isLeapYear(2024), true);
    });

    it('should return false if year is not leap', () => {
        assert.equal(isLeapYear(2023), false);
    });
});
