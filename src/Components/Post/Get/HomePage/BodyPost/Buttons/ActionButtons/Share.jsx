import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";

const Share = () => {
  return (
    <>
      <Button
        className="homePagePostCardShareButton"
        disabled={true}
        sx={{
          textTransform: "unset",
          color: "black",
        }}
      >
        <ShareIcon
          sx={{
            fontSize: "20px",
          }}
          color="action"
        />
        <h5 className="homePagePostCardButtonText">Share</h5>
      </Button>
    </>
  );
};

export default Share;
