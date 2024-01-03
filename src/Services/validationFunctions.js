export const validateUserName = (e) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(e);
};

export const validateEmail = (e) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(e);
};

export const valiURL = (e) => {
  const regex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(e);
};
