import { validateProgress, isValidCourseId } from '../validation';

describe('validation', () => {
  describe('validateProgress', () => {
    it('should return progress within 0-100 range', () => {
      expect(validateProgress(50)).toBe(50);
      expect(validateProgress(0)).toBe(0);
      expect(validateProgress(100)).toBe(100);
    });

    it('should clamp values outside range', () => {
      expect(validateProgress(150)).toBe(100);
      expect(validateProgress(-10)).toBe(0);
      expect(validateProgress(200)).toBe(100);
    });

    it('should round decimal values', () => {
      expect(validateProgress(50.7)).toBe(51);
      expect(validateProgress(50.3)).toBe(50);
    });

    it('should handle invalid values', () => {
      expect(validateProgress(NaN)).toBe(0);
      expect(validateProgress(Infinity)).toBe(0);
      expect(validateProgress(-Infinity)).toBe(0);
    });
  });

  describe('isValidCourseId', () => {
    it('should return true for valid course IDs', () => {
      expect(isValidCourseId(1)).toBe(true);
      expect(isValidCourseId(100)).toBe(true);
      expect(isValidCourseId(999)).toBe(true);
    });

    it('should return false for invalid course IDs', () => {
      expect(isValidCourseId(0)).toBe(false);
      expect(isValidCourseId(-1)).toBe(false);
      expect(isValidCourseId(1.5)).toBe(false);
      expect(isValidCourseId(NaN)).toBe(false);
    });
  });
});

