export const years = Array.from(
  { length: new Date().getFullYear() - 2015 + 1 },
  (_, i) => new Date().getFullYear() - i
)
