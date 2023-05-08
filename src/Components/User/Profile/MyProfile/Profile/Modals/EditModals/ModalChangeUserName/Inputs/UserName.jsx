import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const USER_REGEX = /^[A-Za-z\s.\(\)0-9!@#$%&]{4,20}$/;

const UserName = ({
  userName,
  setUserName,
  inputRef,
  validUserName,
  setValidUserName,
  userNameExist,
  setUserNameExist,
}) => {
  const [userNameFocus, setUserNameFocus] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(userName);
    setValidUserName(result);
    setUserNameExist(false);
    if (userName.length > 0) {
      let strRow = userName.toString().split(" ");
      if (strRow.length > 1) {
        return setUserName(strRow[0]);
      }
    }
  }, [userName]);

  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="User Name"
        size="small"
        className="mt-3 mb-3"
        error={(!validUserName && !userNameFocus) || userNameExist}
        onChange={(e) => setUserName(e.target.value)}
        onFocus={() => setUserNameFocus(true)}
        onBlur={() => setUserNameFocus(false)}
        helperText={
          userName.length > 0 && !validUserName
            ? "Must Include Between 4 And 8 Letters"
            : userNameExist
            ? "User Name it's existing"
            : "Choose User Name"
        }
        inputProps={{ maxLength: 8 }}
        inputRef={inputRef}
        value={userName}
      />
    </>
  );
};

export default UserName;
