import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const Phone = ({ phone, setPhone }) => {
  useEffect(() => {
    if (phone === " ") {
      setPhone("");
    } else {
      if (phone[0] === " ") {
        let str = phone.substr(1);
        setPhone(str);
      }
    }
  }, [phone]);

  return (
    <div className="mt-2">
      <TextField
        id="outlined"
        label="Phone"
        size="small"
        type={"tel"}
        className="loginSystemInput mt-3"
        helperText="Your Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        inputProps={{ maxLength: 15 }}
        value={phone || ""}
      />
    </div>
  );
};

export default Phone;
