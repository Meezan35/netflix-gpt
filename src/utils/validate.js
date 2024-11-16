export const checkValidate = (email, password) => {
 

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  
  if (!isEmailValid.test(email)) return "Email is not valid";
  if (!isPasswordValid.test(password)) return "Password is not valid";


  return null;
};
