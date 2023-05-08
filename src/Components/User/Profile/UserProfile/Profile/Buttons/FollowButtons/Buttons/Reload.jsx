import React from 'react'
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";


const Reload = () => {
  return (
    <IconButton
      sx={{
        ml: "25px",
        color: "black",
        width: "33px",
        height: "33px",
        mt: "-2px",
      }}
      disabled
    >
      <RefreshIcon
        sx={{
          animation: "spin 0.7s linear infinite",
          "@keyframes spin": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        }}
      />
    </IconButton>
  );
};

export default Reload;
