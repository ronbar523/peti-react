import React from "react";
import { Button } from "@mui/material";

const RejectAll = ({
  setModalMessageRejectAllRequest,
  totalRequest,
}) => {
  return (
    <>
      <Button
        sx={{
          textTransform: "unset",
        }}
        className="modalMyRequestRejectAllButton"
        variant="outlined"
        color="error"
        disabled={totalRequest === 0 }
        onClick={() => setModalMessageRejectAllRequest(true)}
      >
        Reject All
      </Button>
    </>
  );
};

export default RejectAll;
