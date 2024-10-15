import { multiply } from '../sandbox/multiply.js';

describe('multiply should be defined and perform multiplications', () => {
    // ? it est un alias de test

    it('should be defined', () => {
        expect(multiply).toBeDefined();
    });

    it('should multiply 5 by 10 and return 50', () => {
        expect(multiply(5, 10)).toBe(50);

        expect(multiply(50, 10)).not.toBe(50);

        expect(multiply(50, 10)).toBe(500);
    });
});
