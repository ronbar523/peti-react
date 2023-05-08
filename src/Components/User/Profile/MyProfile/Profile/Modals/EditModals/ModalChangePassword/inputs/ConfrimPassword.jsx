import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const ConfrimPassowrd = ({
  confirm,
  setConfirm,
  password,
  errConfirm,
  setErrConfirm,
  validConfirm,
  setValidConfirm,
  validPassword,
}) => {
  const [confirmFocus, setConfirmFocus] = useState(false);

  useEffect(() => {
    if (confirm.length > 0) {
      if (password !== confirm) {
        setErrConfirm(true);
      } else {
        setErrConfirm(false);
        setValidConfirm(true);
      }
    }
  }, [confirmFocus]);

  useEffect(() => {
    if (password.length <= confirm.length && confirm.length > 0) {
      if (password !== confirm) {
        setErrConfirm(true);
      } else {
        setErrConfirm(false);
        setValidConfirm(true);
      }
    }
  }, [confirm, password]);

  return (
    <TextField
      required
      autoComplete="off"
      id="outlined-required"
      label="Confirm Password"
      type={"password"}
      size="small"
      className="modalChangePassowrdTextField mt-3 d-block"
      disabled={!validPassword}
      error={errConfirm}
      onChange={(e) => setConfirm(e.target.value)}
      onFocus={() => setConfirmFocus(true)}
      onBlur={() => {
        setConfirmFocus(false);
      }}
      helperText={
        errConfirm
          ? "The Passwords Not Match"
          : validConfirm
          ? "Passwords Match!"
          : "Please Confrim Password"
      }
      inputProps={{ maxLength: 30 }}
      value={confirm}
    />
  );
};

export default ConfrimPassowrd;
