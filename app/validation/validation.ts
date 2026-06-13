export const validateEmail = (email: string) => {
  if (!email.trim()) {
    return "Must enter this field";
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return "Wrong email";
  }

  return "";
};

export const validatePassword = (password: string) => {
  if (!password.trim()) {
    return "Must enter this field";
  }

  if (password.length < 5) {
    return "Password should be more than 5 length";
  }

  return "";
};
