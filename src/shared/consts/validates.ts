export const Validates = {
  EMAIL:
    /^(?=.{1,256})(?=.{1,64}@.{1,255}$)[A-Za-z\d!#$%&'*+/=?^_{|}~-]+@[A-Za-z\d](?:[A-Za-z\d-]{0,61}[A-Za-z\d])?\.[A-Za-z]{2,}$/,
  NAME: /^[а-яА-Я]{3,}$/,
  PASSWORD: /^(?=.*[a-zA-Z])[a-zA-Z]{6,}$/,
};
