const averagePaceMph = (distance, time) => {
  const hours = time / 3600;
  const miles = distance * 0.000621371;
  return (miles / hours).toFixed(2);
};

export default averagePaceMph;
