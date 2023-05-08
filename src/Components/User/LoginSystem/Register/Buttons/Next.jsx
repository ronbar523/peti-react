import React, { useCallback, useState } from "react";
import { findUserByEmail } from "../../../../../Services/UserServices/UserGetService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Next = ({
  email,
  setPage,
  emailExist,
  setEmailExist,
  inputRefEmail,
  validEmail,
  firstName,
  lastName,
  gender,
  setPhone,
  phone
}) => {
  const [isLoadingNext, setIsLoadingNext] = useState(false);

  const next = useCallback(async () => {
    try {
      setIsLoadingNext(true);
      const checkEmail = await findUserByEmail(email);
      if (checkEmail.data.msg === "Email not exist") {
        if (phone === "") {
          setPhone(" - ");
        }
        setPage(1);
      } else {
        setEmailExist(true);
        inputRefEmail.current.focus();
      }
      setIsLoadingNext(false);
    } catch {
      window.location.reload();
    }
  }, [email, phone]);

  return (
    <>
      {!isLoadingNext ? (
        <Button
          sx={{
            width: 40,
            height: 35,
            marginTop: "15px",
            textTransform: "unset",
          }}
          variant={
            emailExist ||
            !validEmail ||
            firstName === "" ||
            lastName === "" ||
            gender === ""
              ? "outlined"
              : "contained"
          }
          disabled={
            emailExist ||
            !validEmail ||
            firstName === "" ||
            lastName === "" ||
            gender === ""
          }
          onClick={() => next()}
        >
          Next
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingNext}
          variant="outlined"
          disabled
          sx={{
            width: 40,
            height: 35,
            marginTop: "15px",
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Next;
