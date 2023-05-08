import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const LastName = ({lastName, setLastName}) => {
  const [lastNameFocus, setLastNameFocus] = useState(false);

  useEffect(() => {
    if(lastName === " "){
      setLastName("")
    } else if (lastName[0] === " "){
    let str = lastName.substr(1)
    setLastName(str)
   }
  }, [lastName])


  return (
    <TextField
      required
      id="outlined-required"
      label="Last Name"
      size="small"
      className="modalChangeNameTextField mt-4 mb-2"
      error={lastName.length === 0 && !lastNameFocus}
      onChange={(e) => setLastName(e.target.value)}
      onFocus={() => setLastNameFocus(true)}
      onBlur={() => setLastNameFocus(false)}
      value={lastName}
      helperText={
        lastName.length === 0 && !lastNameFocus
          ? "Please Fill Your First Name"
          : ""
      }
      inputProps={{ maxLength: 13 }}
    />
  );
};

export default LastName;
