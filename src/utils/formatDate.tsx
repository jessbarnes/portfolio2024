const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export default formatDate;
