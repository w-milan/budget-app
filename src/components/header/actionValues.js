
export const income = (values) => {
  const value = values.map(x => Number(x.incomeAmount));
  return value
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);
};

export const ex = (values) => {
  const value = values.map(x => Number(x.expenseAmount));
  return value
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);
};