const useDateFormatter = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();

  const finalDateFormat = `${day}/${month}/${year}`;

  return { finalDateFormat };
};
export default useDateFormatter;
