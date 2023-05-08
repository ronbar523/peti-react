import React, { useCallback, useEffect, useState } from "react";
import { resendVerifyMail } from "../../../../../../Services/UserServices/UserPostService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const ResendButton = ({ setVerify, setModalAlreadyVerify }) => {
  const [isLoadingResend, setIsLoadingResend] = useState(false);
  const [resendMail, setResendMail] = useState(false);

  const resend = useCallback(async () => {
    try {
      setIsLoadingResend(true);
      await resendVerifyMail().then((res) => {
        if (res.data.msg === "You user already verified") {
          setVerify(true);
          setModalAlreadyVerify(true)
        } else {
          setResendMail(true);
        }
      });
      setResendMail(true);
      setIsLoadingResend(false);
    } catch {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    if(resendMail) {
      setTimeout(() => {
        setResendMail(false)
      }, 2000)
    }
  }, [resendMail])

  return (
    <>
      {!isLoadingResend ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "-2px",
            textTransform: "unset",
            width: 108,
            height: 27,
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
            marginRight: "7px",
            marginTop: "-4px",
            width: 108,
            height: 32,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default ResendButton;
