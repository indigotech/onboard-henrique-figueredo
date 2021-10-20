import { Regex } from './regex';

export const isValidName = (name: string) => {
  const notOnlyLetter = Regex.onlyLetter.test(name);
  if (notOnlyLetter) {
    return;
  }
  return true;
};

export const isValidEmail = (email: string) => {
  const validEmail = Regex.email.test(email);
  if (!validEmail) {
    return;
  }
  return true;
};

export const isValidPhone = (phone: string) => {
  const notOnlyDigits = Regex.onlyDigits.test(phone);
  if (notOnlyDigits || phone.length !== 11) {
    return;
  }
  return true;
};

export const isValidPassword = (password: string) => {
  const validPassword = Regex.password.test(password);
  if (!validPassword) {
    return;
  }
  return true;
};
