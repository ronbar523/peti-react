import React from "react";
import { Button } from "@mui/material";

const Message = ({ myUser, disabledMessage }) => {

  return (
    <>
      {!myUser ? (
        <Button
        variant="outlined"
          className="modalUserInfoMessageutton"
          sx={{
            textTransform: "unset",
            fontSize: "13px",
            width: "105px",
            height: "35px"
          }}
          // disabled={disabledMessage}
          disabled={true}
        >
          Message
        </Button>
      ) : null}
    </>
  );
};

export default Message;
