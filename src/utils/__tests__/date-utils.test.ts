import { isValidISODate, normalizeToISODate, TIME_CONSTANTS } from '../date-utils';

describe('date-utils', () => {
  describe('isValidISODate', () => {
    it('should return true for valid ISO date strings', () => {
      expect(isValidISODate('2024-01-15T10:30:00.000Z')).toBe(true);
      expect(isValidISODate('2024-01-15T10:30:00Z')).toBe(true);
      expect(isValidISODate('2024-01-15')).toBe(true);
      expect(isValidISODate('2024-01-15T10:30:00+02:00')).toBe(true);
    });

    it('should return false for invalid date strings', () => {
      expect(isValidISODate('invalid-date')).toBe(false);
      expect(isValidISODate('sub_token_123')).toBe(false);
      expect(isValidISODate('2024-13-45')).toBe(false);
      expect(isValidISODate('')).toBe(false);
    });

    it('should return false for null', () => {
      expect(isValidISODate(null)).toBe(false);
    });
  });

  describe('normalizeToISODate', () => {
    it('should return valid ISO date strings', () => {
      expect(normalizeToISODate('2024-01-15T10:30:00.000Z')).toBe('2024-01-15T10:30:00.000Z');
      expect(normalizeToISODate('2024-01-15')).toBe('2024-01-15');
    });

    it('should return null for invalid dates', () => {
      expect(normalizeToISODate('invalid-date')).toBe(null);
      expect(normalizeToISODate('sub_token_123')).toBe(null);
      expect(normalizeToISODate(null)).toBe(null);
    });
  });

  describe('TIME_CONSTANTS', () => {
    it('should have correct time constants', () => {
      expect(TIME_CONSTANTS.MS_PER_DAY).toBe(1000 * 60 * 60 * 24);
      expect(TIME_CONSTANTS.DAYS_PER_WEEK).toBe(7);
      expect(TIME_CONSTANTS.DAYS_PER_MONTH).toBe(30);
      expect(TIME_CONSTANTS.DAYS_PER_YEAR).toBe(365);
    });
  });
});

