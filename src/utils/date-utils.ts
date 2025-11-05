/**
 * Validates if a string is a valid ISO date string
 * @param str - String to validate
 * @returns true if the string is a valid ISO date
 */
export const isValidISODate = (str: string | null): boolean => {
  if (!str) return false;
  
  // ISO date pattern: YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.sssZ
  // Simplified regex with proper parentheses matching
  const datePart = '\\d{4}-\\d{2}-\\d{2}';
  const timePart = 'T\\d{2}:\\d{2}:\\d{2}';
  const msPart = '\\.\\d{3}';
  const tzPart = 'Z|[+-]\\d{2}:\\d{2}';
  const isoDatePattern = new RegExp(
    `^${datePart}(?:${timePart}(?:${msPart})?(?:${tzPart})?)?$`
  );
  
  return isoDatePattern.test(str) && !isNaN(Date.parse(str));
};

/**
 * Validates and normalizes a date string to ISO format
 * @param dateString - Date string to validate
 * @returns Valid ISO date string or null
 */
export const normalizeToISODate = (dateString: string | null): string | null => {
  if (!dateString) return null;
  
  if (isValidISODate(dateString)) {
    return dateString;
  }
  
  return null;
};

/**
 * Time constants for date calculations
 */
export const TIME_CONSTANTS = {
  MS_PER_DAY: 1000 * 60 * 60 * 24,
  DAYS_PER_WEEK: 7,
  DAYS_PER_MONTH: 30,
  DAYS_PER_YEAR: 365,
} as const;

