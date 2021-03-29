const averagePaceKm = (distance, time) => {
  const hours = time / 3600;
  const km = distance / 1000;
  return (km / hours).toFixed(2);
};

export default averagePaceKm;
