import { DateTime } from '../node_modules/luxon/src/luxon.js';

const DateSet = document.getElementById('date');
const DateAndTime = () => {
  const date = DateTime.now();
  DateSet.textContent = `${date.year}:${date.month}:${date.day} ${date.hour}:${date.minute}:${date.second}`;
};

export default DateAndTime;
