const sortByDate = (list: any[]) => {
  return list.sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
  );
};

export default sortByDate;
