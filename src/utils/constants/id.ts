const MAX_VALUE = Math.floor(99999);
const MIN_VALUE = Math.floor(10000);

const getRandomNumber = () =>
  Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE);

export const createId = () => {
  const RANDOM = [];

  for (let x = 1; x <= 4; x++) {
    RANDOM.push(getRandomNumber());
  }

  return `${RANDOM[1]}-${RANDOM[2]}-${RANDOM[3]}-${RANDOM[4]}}`;
};
