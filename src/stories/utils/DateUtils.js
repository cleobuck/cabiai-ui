export const formatDate = (date) => {
  const dateObject = new Date(date);

  console.log(dateObject);
  let month = "" + (dateObject.getMonth() + 1);
  let day = "" + dateObject.getDate();
  const year = dateObject.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

export const calculateDays = (startDate, endDate) => {
  const differenceInTime =
    new Date(endDate).getTime() - new Date(startDate).getTime();

  return differenceInTime / (1000 * 3600 * 24);
};
