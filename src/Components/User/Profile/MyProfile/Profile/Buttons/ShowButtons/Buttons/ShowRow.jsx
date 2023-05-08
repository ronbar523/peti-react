import React from "react";
import { Button } from "@mui/material";
import TocIcon from "@mui/icons-material/Toc";
import AppsIcon from "@mui/icons-material/Apps";


const ShowRow = ({ setTableShow }) => {
  return (
    <>
      <Button
        sx={{
          width: "50%",
          height: "100%",
        }}
        onClick={() => setTableShow(true)}
      >
        <AppsIcon sx={{ color: "black" }} />
      </Button>

      <Button
        sx={{
          width: "50%",
          height: "100%",
          background: "darkgray",
        }}
        disabled={true}
      >
        <TocIcon sx={{ fontSize: "30px", color: "black" }} />
      </Button>
    </>
  );
};

export default ShowRow;
