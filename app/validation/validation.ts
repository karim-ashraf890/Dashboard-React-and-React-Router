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
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  return "";
};
