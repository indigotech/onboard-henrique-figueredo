export const Regex = {
  onlyLetter: /[^a-zA-Z]/,
  onlyDigits: /\D/,
  email: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
  password: /^(?=.*[0-9])(?=.*[A-Z]).{7,}$/,
};
