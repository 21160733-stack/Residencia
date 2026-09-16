export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return { valid: false, message: "Email is required" };
  if (!regex.test(email)) return { valid: false, message: "Invalid email format (e.g. user@domain.com)" };
  return { valid: true, message: "" };
};

export const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
  if (!password) return { valid: false, message: "Password is required" };
  if (!regex.test(password)) {
    return {
      valid: false,
      message: "Password must be at least 8 characters long, contain one uppercase, one lowercase, one number and one special character",
    };
  }
  return { valid: true, message: "" };
};

export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === "") {
    return { valid: false, message: `${fieldName} is required` };
  }
  return { valid: true, message: "" };
};