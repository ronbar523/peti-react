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
  emailExist,
  setEmailExist,
  emailExist2,
}) => {
  useEffect(() => {
    inputRefEmail.current.focus();
  }, []);

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
        setEmailExist(false);
        if (email === emailExist2 && email.length > 0) {
          setEmailExist(true);
        }
      }
    }
  }, [email]);

  return (
    <>
      <div className="mt-3">
        <TextField
          required
          id="outlined-required"
          size="small"
          label="Email"
          className="loginSystemInput"
          error={(!validEmail && !emailFocus) || emailExist}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          inputRef={inputRefEmail}
          value={email || ""}
          helperText={
            !validEmail && !emailFocus
              ? "Please Fill Your Email Account"
              : emailExist
              ? "Email Exist"
              : "Fill Your Email Account"
          }
        />
      </div>
    </>
  );
};

export default Email;
