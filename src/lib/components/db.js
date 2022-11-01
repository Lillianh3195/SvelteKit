await new Promise((f) => setTimeout(f, 1000));

export const client = {
  get: (str) => str.toUpperCase(),
};
