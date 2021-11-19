import { DateTime } from 'luxon';

export const getCurrentTime = () => {
  const time = DateTime.now();
  return {
    day: time.toFormat('EEEE'),
    month: time.toFormat('MMM'),
    year: time.toFormat('y'),
    date: time.toFormat('d'),
  };
};
