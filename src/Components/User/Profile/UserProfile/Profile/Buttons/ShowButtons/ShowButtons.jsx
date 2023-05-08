import React from "react";
import { Paper } from "@mui/material";
import ShowTable from "./Buttons/ShowTable";
import ShowRow from "./Buttons/ShowRow";

const ShowButtons = ({ tableShow, setTableShow }) => {

  return (
    <>
      <Paper
        className="userProfileCardShowPostOptions"
        sx={{
          m: "auto",
          mt: "15px",
        }}
      >
        {tableShow ? (
          <ShowTable setTableShow={setTableShow} />
        ) : (
          <ShowRow setTableShow={setTableShow} />
        )}
      </Paper>
    </>
  );
};

export default ShowButtons;
