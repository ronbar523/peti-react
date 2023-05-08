import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

const EMAIL_REGEX = /^[0-9a-z]+(?:\.[0-9a-z]+)*@[a-z0-9]{2,}(?:\.[a-z]{2,})+$/;

const Email = ({
  email,
  setEmail,
  validEmail,
  setValidEmail,
  emailExist,
  setEmailExist,
  inputRef
}) => {
  const [emailFocus, setEmailFocus] = useState(false);

  useEffect(() => {
    if (email === " ") {
      setEmail("");
    } else {
      if(email[0] === " "){
        let str = email.substr(1)
        setEmail(str)
       } else {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
    setEmailExist(false);
    }}
  }, [email]);

  return (
    <TextField
      required
      id="outlined-required"
      size="small"
      label="Email"
      className="mt-3 mb-3 textFieldEmailModal"
      error={(!validEmail && !emailFocus) || emailExist}
      onChange={(e) => setEmail(e.target.value)}
      onFocus={() => setEmailFocus(true)}
      onBlur={() => setEmailFocus(false)}
      inputRef={inputRef}
      value={email || ""}
      helperText={
        !validEmail && !emailFocus
          ? "Please Fill Your Email Account"
          : emailExist
          ? "Email Exist"
          : "Fill Your New Email Account"
      }
    />
  );
};

export default Email;
