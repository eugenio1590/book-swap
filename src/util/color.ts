const randomSoftColor = () => {
  const getRandomValue = () => Math.floor(Math.random() * 76) + 180;
  const r = getRandomValue().toString(16).padStart(2, '0');
  const g = getRandomValue().toString(16).padStart(2, '0');
  const b = getRandomValue().toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
};

export {randomSoftColor};
