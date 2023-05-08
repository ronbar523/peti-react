import React from "react";
import { Button } from "@mui/material";

const UnTagAll = ({ userTaged, setUserTaged, usersArr, setUsersArr, inputRef }) => {
  const removeAll = () => {
    inputRef.current.focus()
    setUsersArr([...usersArr, ...userTaged]);
    setUserTaged([]);
  };

  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        marginLeft: "15px",
        width: 150,
        marginBottom: "15px",
        textTransform: "unset",
        float: "left",
      }}
      disabled={userTaged.length === 0}
      onClick={() => removeAll()}
    >
      Remove All Tags
    </Button>
  );
};

export default UnTagAll;
