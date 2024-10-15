import { divide } from '../sandbox/divide.js';

describe('divide should be defined and perform divisions', () => {
    // ? it est un alias de test
    it('should be defined', () => {
        expect(divide).toBeDefined();
    });

    it('should divide 10 and 10 and return 1 ', () => {
        expect(divide(10, 10)).toBe(1);
    });

    it('should divide 0 and 10 and return 0', () => {
        expect(divide(0, 10)).toBe(0);
    });

    it('should not divide 10 and 0 and throw an error', () => {
        expect(() => {
            divide(10, 0);
        }).toThrow();
    });
});
