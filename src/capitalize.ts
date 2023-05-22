export const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

export const capitalizeExtra = (s: string): string =>
  capitalize(s.toLowerCase());
