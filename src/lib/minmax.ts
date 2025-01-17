export const minmax = (value: number, min: number, max: number) => {
  const numeric = Number.isNaN(value) ? min : value;
  return Math.max(Math.min(numeric, max), min);
};
