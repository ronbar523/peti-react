import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const FIRST_NAME_REGEX = /^[A-Za-z\s.\(\)0-9]{1,15}$/;

const FirstName = ({
  firstName,
  setFirstName,
  validFirstName,
  setValidFirstName,
  firstNameFocus,
  setFirstNameFocus,
}) => {
  useEffect(() => {
    if (firstName === " ") {
      setFirstName("");
    } else {
      if (firstName[0] === " ") {
        let str = firstName.substr(1);
        setFirstName(str);
      } else {
      const result = FIRST_NAME_REGEX.test(firstName);
      setValidFirstName(result);
      }
    }
  }, [firstName]);

  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="First Name"
        size="small"
        className="loginSystemInput mt-4"
        error={!validFirstName && !firstNameFocus}
        onChange={(e) => setFirstName(e.target.value)}
        onFocus={() => setFirstNameFocus(true)}
        onBlur={() => setFirstNameFocus(false)}
        value={firstName || ""}
        helperText={
          !validFirstName && !firstNameFocus
            ? "Please Fill Your First Name"
            : "Your First Name"
        }
        inputProps={{ maxLength: 13 }}
      />
    </div>
  );
};

export default FirstName;
