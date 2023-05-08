import React from "react";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Message = ({ myUser, disabledMessage }) => {
  return (
    <>
      {!myUser && userStore.isLogin ? (
        <Button
        variant="outlined"
          className="modalUserInfoMessageutton"
          sx={{
            textTransform: "unset",
            fontSize: "13px",
            width: "105px",
            height: "35px"
          }}
          disabled={true}
          // disabled={disabledMessage}
        >
          Message
        </Button>
      ) : null}
    </>
  );
};

export default Message;
