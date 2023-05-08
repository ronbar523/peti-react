import React from "react";
import { Button } from "@mui/material";

const Delete = ({ description, setDescription, setModalDelete, inputRefDescription }) => {


  const deleteDescription = () => {
    if (description.length > 15) {
      setModalDelete(true);
    } else {
      inputRefDescription.current.focus();
      setDescription("");
    }
  };

  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        marginLeft: "15px",
        width: 75,
        height: 35,
        marginBottom: "15px",
        textTransform: "unset",
      }}
      onClick={() => deleteDescription()}
      disabled={description === ""}
    >
      Delete
    </Button>
  );
};

export default Delete;
