import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const LAST_NAME_REGEX = /^[A-Za-z\s.\(\)0-9]{1,15}$/;

const LastName = ({
  lastName,
  setLastName,
  validLastName,
  setValidLastName,
  lastNameFocus,
  setLastNameFocus,
}) => {
  useEffect(() => {
    if (lastName === " ") {
      setLastName("");
    } else {
      if (lastName[0] === " ") {
        let str = lastName.substr(1);
        setLastName(str);
      } else {
    const result = LAST_NAME_REGEX.test(lastName);
    setValidLastName(result);
      }
    }
  }, [lastName]);

  return (
    <>
      <div className="mt-2">
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          size="small"
          className="loginSystemInput mt-3"
          error={!validLastName && !lastNameFocus}
          onChange={(e) => setLastName(e.target.value)}
          onFocus={() => setLastNameFocus(true)}
          onBlur={() => setLastNameFocus(false)}
          inputProps={{ maxLength: 13 }}
          value={lastName || ""}
          helperText={!validLastName && !lastNameFocus ? "Please Fill Your Last Name" : "Your Last Name"}
        />
      </div>
    </>
  );
};

export default LastName;
