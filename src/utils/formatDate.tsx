const formatDate = (date: string) => {
  const dateObj = new Date(date);
  // Check if the date is valid
  if (isNaN(dateObj.getTime())) {
    console.error(`Invalid date: ${date}`);
    return "Invalid Date";
  }

  // Adjust for UTC
  const utcDate = new Date(
    dateObj.getTime() + dateObj.getTimezoneOffset() * 60000
  );

  return utcDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};

export default formatDate;
