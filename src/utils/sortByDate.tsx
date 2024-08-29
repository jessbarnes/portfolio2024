const sortByDate = (list: any[]) => {
  return list.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
};

export default sortByDate;
