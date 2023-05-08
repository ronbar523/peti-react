import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;

const Password = ({
  password,
  setPassword,
  validPassword,
  setValidPassword,
  passwordFocus,
  setPasswordFocus,
}) => {
  useEffect(() => {
    
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
          error={!validPassword && !passwordFocus}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => {
            setPasswordFocus(false);
          }}
          inputProps={{ maxLength: 30 }}
          helperText={
            (!passwordFocus || password.length > 0) && !validPassword ? (
              <>
                *Min 6 And Max 30 Charters
                <br />
                *Min 1 Big Letter
                <br />
                *Min 1 Small Letter
                <br />
                *Min 1 Sign
              </>
            ) : validPassword ? (
              "Password Is Good"
            ) : (
              "Password"
            )
          }
          value={password || ""}
        />
      </div>
    </>
  );
};

export default Password;
