import experienceData from '../data/experience.json';

/**
 * Parse the start date from the earliest work experience
 * @returns {Date} The start date of career
 */
const getCareerStartDate = () => {
  // Since the experience data is sorted in descending order, the last entry is the earliest
  const earliestExperience = experienceData[experienceData.length - 1];
  const duration = earliestExperience.duration;
  
  // Extract the start date from duration string (e.g., "Mar 2013 - May 2014")
  const startDateStr = duration.split(' - ')[0].trim();
  
  // Parse month and year from strings like "Mar 2013"
  const [monthStr, yearStr] = startDateStr.split(' ');
  const year = parseInt(yearStr);
  
  // Convert month abbreviation to month number (0-indexed)
  const monthMap = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  const month = monthMap[monthStr];
  
  return new Date(year, month, 1);
};

/**
 * Calculate years of experience since career start
 * @returns {number} Number of years of experience
 */
export const calculateYearsOfExperience = () => {
  const startDate = getCareerStartDate();
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  
  // If the current month/day is before the start month/day, subtract one year
  if (currentDate.getMonth() < startDate.getMonth() || 
      (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
    years--;
  }
  
  return years;
};

/**
 * Get formatted experience text
 * @returns {string} Formatted experience text like "12+" or "13+"
 */
export const getExperienceText = () => {
  return `${calculateYearsOfExperience()}+`;
}; 