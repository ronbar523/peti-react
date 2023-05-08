import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const USER_REGEX = /^[A-Za-z.\(\)0-9!@#$%&]{4,20}$/;

const UserName = ({
  inputRefUserName,
  userName,
  setUserName,
  validUserName,
  setValidUserName,
  userNameFocus,
  setUserNameFocus,
  userNameExist,
  setUserNameExist,
}) => {
  
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

  useEffect(() => {
    inputRefUserName.current.focus();
  }, []);

  return (
    <>
      <div>
        <TextField
          required
          id="outlined-required"
          size="small"
          label="User Name"
          className="loginSystemInput"
          error={(!validUserName && !userNameFocus) || userNameExist}
          onChange={(e) => setUserName(e.target.value)}
          onFocus={() => setUserNameFocus(true)}
          onBlur={() => setUserNameFocus(false)}
          inputRef={inputRefUserName}
          helperText={
            userName.length > 0 && !validUserName
              ? "Must Include Between 4 And 8 Letters"
              : userNameExist
              ? "User Name it's existing"
              : "Choose User Name"
          }
          inputProps={{ maxLength: 8 }}
          value={userName || ""}
        />
      </div>
    </>
  );
};

export default UserName;
