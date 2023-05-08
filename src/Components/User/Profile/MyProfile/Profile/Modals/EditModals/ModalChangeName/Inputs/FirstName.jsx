import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const FirstName = ({
    inputRef,
    firstName,
    setFirstName
}) => {
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    useEffect(() => {
      if(firstName === " "){
        setFirstName("")
      } else if (firstName[0] === " "){
      let str = firstName.substr(1)
      setFirstName(str)
     }
    }, [firstName])

  return (
    <TextField
      required
      id="outlined-required"
      label="First Name"
      size="small"
      className="modalChangeNameTextField mt-2 d-block"
      error={firstName.length === 0 && !firstNameFocus}
      onChange={(e) => setFirstName(e.target.value)}
      onFocus={() => setFirstNameFocus(true)}
      onBlur={() => setFirstNameFocus(false)}
      value={firstName}
      helperText={
        firstName.length === 0 && !firstNameFocus
          ? "Please Fill Your First Name"
          : ""
      }
      inputProps={{ maxLength: 13 }}
      inputRef={inputRef}
    />
  );
};

export default FirstName;
