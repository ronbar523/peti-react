import React from "react";
import { Button } from "@mui/material";

const AcceptAll = ({
  setModalMessageAcceptAllRequest,
  totalRequest,
}) => {
  return (
    <>
      <Button
        sx={{
          textTransform: "unset",
        }}
        className="modalMyRequestAcceptAllButton"
        variant="outlined"
        disabled={totalRequest === 0}
        onClick={() => setModalMessageAcceptAllRequest(true)}
      >
        Accept All
      </Button>
    </>
  );
};

export default AcceptAll;
