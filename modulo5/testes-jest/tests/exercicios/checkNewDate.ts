export const checkNewDate = (d: string): string => {
  const date = new Date(d);
  const newDate = date.toLocaleDateString();
  return newDate;
};
