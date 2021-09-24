const parseDate = (date: Date) => (date ? date.toISOString() : null);

/**
 * Returns todays Date with T=23:59:59
 * @param days:number 0 by default, number of days to increase todays date.
 * @returns New Date object
 */
const addDaysCeil = (days = 0) => {
  const today = new Date();

  today.setDate(today.getDate() + days);

  const isoDate = `${today.toISOString().slice(0, 10)}T23:59:59.999Z`;

  return new Date(isoDate);
};

export { parseDate, addDaysCeil };
