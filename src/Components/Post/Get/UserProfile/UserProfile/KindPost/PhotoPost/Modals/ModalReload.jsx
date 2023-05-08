import React from 'react'
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const ModalReload = () => {
  return (
    <>
      <Box sx={{ display: "flex"}}>
        <CircularProgress sx={{ margin: "auto" }} />
      </Box>
    </>
  );
};

export default ModalReload;
