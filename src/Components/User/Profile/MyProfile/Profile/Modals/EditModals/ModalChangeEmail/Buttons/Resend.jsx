import React, { useCallback, useEffect, useState } from "react";
import { resendVerifyMail } from "../../../../../../../../../Services/UserServices/UserPostService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Resend = ({ setModalUserBlock, setModalAlreadyVerify,setVerifyMessage,  setVerify }) => {
  const [resendMail, setResendMail] = useState(false);
  const [isLoadingResend, setIsLoadingResend] = useState(false);

  const resend = useCallback(async () => {
    try {
      setIsLoadingResend(true);
      await resendVerifyMail().then((res) => {
        if (res.data.msg === "You user already verified") {
          setVerifyMessage(false)
          setModalAlreadyVerify(true)
          setVerify(true)
        } else {
          setResendMail(true);
        }
      });
      setResendMail(true);
      document.body.style.overflow = "visible";
      setIsLoadingResend(false);
    } catch (err) {
      if (err.response.data.err === "You account it's blocked") {
        setVerifyMessage(false)
        setModalUserBlock(true)
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
            marginRight: "8px",
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
            marginRight: "8px",
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
