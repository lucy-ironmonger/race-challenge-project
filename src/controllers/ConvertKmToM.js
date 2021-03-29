const convertKmToM = (values) => {
  const changeToKm = values / 1000;
  const miles = (changeToKm * 0.621371).toFixed(2);
  return miles;
};

export default convertKmToM;
