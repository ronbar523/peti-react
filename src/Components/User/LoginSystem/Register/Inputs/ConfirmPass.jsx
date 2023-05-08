import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const ConfirmPass = ({
  password,
  confirm,
  setConfirm,
  validPassword,
  validConfirm,
  setValidConfirm,
  confirmFocus,
  setConfirmFocus,
  errConfirm,
  setErrConfirm,
}) => {
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

  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Confirm"
        size="small"
        type={"password"}
        className="loginSystemInput mt-4"
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
        value={confirm || ""}
      />
    </div>
  );
};

export default ConfirmPass;
