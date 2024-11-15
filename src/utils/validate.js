export const checkValidate = (email, password, fullName) => {
  const isFullNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // .test() method to check input validity
  if (!isFullNameValid.test(fullName)) return "Full Name is not valid";
  if (!isEmailValid.test(email)) return "Email is not valid";
  if (!isPasswordValid.test(password)) return "Password is not valid";


  return null;
};
