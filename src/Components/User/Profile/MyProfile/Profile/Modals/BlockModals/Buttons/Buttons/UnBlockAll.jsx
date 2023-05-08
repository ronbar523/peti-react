import React from "react";
import { Button } from "@mui/material";

const UnBlockAll = ({
  setModalUnBlockAll,
  disabledButtons,
  totalBlockUser,
}) => {
  return (
    <>
      <Button
        sx={{
          textTransform: "unset",
        }}
        className="modalMyBlockAcceptAllButton"
        variant="outlined"
        color="inherit"
        disabled={totalBlockUser === 0 || disabledButtons}
        onClick={() => setModalUnBlockAll(true)}
      >
        Unblock All
      </Button>
    </>
  );
};

export default UnBlockAll;
