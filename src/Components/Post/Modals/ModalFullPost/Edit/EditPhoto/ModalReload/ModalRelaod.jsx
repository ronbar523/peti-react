import React from 'react'
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const ModalReload = () => {
  return (
    <>
      <Box sx={{ display: "flex", mt: "20px", height: "310px"}}>
        <CircularProgress sx={{ margin: "auto" }} />
      </Box>
    </>
  );
};

export default ModalReload;
