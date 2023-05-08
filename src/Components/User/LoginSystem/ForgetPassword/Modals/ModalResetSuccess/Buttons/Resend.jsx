import React, { useCallback, useEffect, useState } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";
import { resendForgetPassword } from "../../../../../../../Services/UserServices/UserPostService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Resend = ({ setRequestAvailble, setModalUserBlock }) => {
  const [isLoadingResend, setIsLoadingResend] = useState(false);
  const [resendMail, setResendMail] = useState(false);

  const resend = useCallback(async () => {
    try {
      setIsLoadingResend(true);
      const email = userStore.user.email;
      await resendForgetPassword(email);
      setResendMail(true);
      setIsLoadingResend(false);
    } catch (err) {
      if (err.response.data.err === "Request not available") {
        setRequestAvailble(true);
        setIsLoadingResend(false);
      } else if (err.response.data.err === "You account it's blocked") {
        setModalUserBlock(true);
      } else {
        window.location.reload();
      }
    }
  }, []);

  useEffect(() => {
    if (resendMail) {
      setTimeout(() => {
        setResendMail(false);
      }, 20000);
    }
  }, [resendMail]);

  return (
    <>
      {!isLoadingResend ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            width: 110,
            height: 37,
          }}
          disabled={resendMail}
          onClick={() => resend()}
        >
          Send Again
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingResend}
          variant="outlined"
          disabled
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            height: 37,
            width: 110,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Resend;
