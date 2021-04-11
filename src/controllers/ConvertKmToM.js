const convertKmToM = (metres) => {
  const changeToKm = metres / 1000;
  const miles = (changeToKm * 0.621371).toFixed(2);
  return miles;
};

export default convertKmToM;
