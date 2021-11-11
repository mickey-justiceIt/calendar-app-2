export const validate = (values) => {
  const errors = {};
  // Sign up
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must have 1 number,1 small letter,1 big letter and 1 symbol";
  }
  return errors;
};


