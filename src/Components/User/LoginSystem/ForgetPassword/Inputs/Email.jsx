import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const EMAIL_REGEX =
  /^[0-9a-zA-Z]+(?:\.[0-9a-zA-Z]+)*@[a-z0-9]{2,}(?:\.[a-z]{2,})+$/;

const Email = ({
  inputRefEmail,
  email,
  setEmail,
  validEmail,
  setValidEmail,
  emailFocus,
  setEmailFocus,
  emailNotExist,
  setEmailNotExist,
}) => {
  useEffect(() => {
    if (email === " ") {
      setEmail("");
    } else {
      if (email[0] === " ") {
        let str = email.substr(1);
        setEmail(str);
      } else {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
        setEmailNotExist(false);
      }
    }
  }, [email]);

  useEffect(() => {
    inputRefEmail.current.focus();
  }, []);

  return (
    <>
      <div className="mt-5">
        <TextField
          required
          id="outlined-required"
          size="small"
          label="Email"
          className="loginSystemInput"
          error={(!validEmail && !emailFocus) || emailNotExist}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          inputRef={inputRefEmail}
          value={email || ""}
          helperText={
            !validEmail && !emailFocus
              ? "Please Fill Your Email Account"
              : emailNotExist
              ? "Email Not Exist"
              : "Email"
          }
        />
      </div>
    </>
  );
};

export default Email;
