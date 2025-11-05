/**
 * Validates that progress is within valid range (0-100)
 * @param progress - Progress value to validate
 * @returns Validated progress value (clamped to 0-100)
 */
export const validateProgress = (progress: number): number => {
  if (isNaN(progress) || !isFinite(progress)) {
    return 0;
  }
  return Math.max(0, Math.min(100, Math.round(progress)));
};

/**
 * Validates course ID is a positive number
 * @param courseId - Course ID to validate
 * @returns true if valid
 */
export const isValidCourseId = (courseId: number): boolean => {
  return Number.isInteger(courseId) && courseId > 0;
};

