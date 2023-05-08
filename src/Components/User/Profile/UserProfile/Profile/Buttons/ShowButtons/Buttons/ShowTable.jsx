import React from "react";
import { Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import TocIcon from "@mui/icons-material/Toc";

const ShowTable = ({ setTableShow }) => {

  return (
    <>
      <Button
        sx={{
          width: "50%",
          height: "100%",
          background: "darkgray",
        }}
        disabled={true}
      >
        <AppsIcon sx={{ color: "black" }} />
      </Button>

      <Button
        sx={{
          width: "50%",
          height: "100%",
        }}
        onClick={() => setTableShow(false)}
      >
        <TocIcon sx={{ fontSize: "30px", color: "black" }} />
      </Button>
    </>
  );
};

export default ShowTable;
