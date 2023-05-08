import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;

const Password = ({
  inputRef,
  password,
  setPassword,
  validPassword,
  setValidPassword,
}) => {
  const [passwordFocus, setPasswordFocus] = useState(true);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  return (
    <>
      <TextField
        required
        autoComplete="off"
        id="outlined-required"
        label="Password"
        type={"password"}
        size="small"
        className="modalChangePassowrdTextField mt-2 d-block"
        error={!validPassword && !passwordFocus}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
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
        inputProps={{ maxLength: 30 }}
        value={password}
        inputRef={inputRef}
      />
    </>
  );
};

export default Password;
