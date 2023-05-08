import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;

const Password = ({
  inputRefPassword,
  password,
  setPassword,
  passwordFocus,
  setPasswordFocus,
  wrongPassword,
  setWrongPassword,
  setValidPassword,
}) => {


  useEffect(() => {
    if (wrongPassword) {
      setWrongPassword(false);
      inputRefPassword.current.focus();
    }
    
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);

  }, [password]);

  return (
    <>
      <div>
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          label="Password"
          type={"password"}
          size="small"
          className="loginSystemInput mt-4"
          error={(!passwordFocus && password.length === 0) || wrongPassword}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => {
            setPasswordFocus(false);
          }}
          inputRef={inputRefPassword}
          inputProps={{ maxLength: 30 }}
          helperText={
            (passwordFocus || password.length > 0) && !wrongPassword
              ? "Password"
              : wrongPassword
              ? "Wrong Password"
              : "Please Enter Your Password"
          }
          value={password || ""}
        />
      </div>
    </>
  );
};

export default Password;
