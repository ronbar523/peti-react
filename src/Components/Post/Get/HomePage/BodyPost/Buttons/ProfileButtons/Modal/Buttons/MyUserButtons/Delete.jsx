import React from "react";
import { postStore } from "../../../../../../../../../../Store/Post/PostSotre";
import { Button } from "@mui/material";

const Delete = ({ item, setModalDeletePost, setAnchorEl }) => {
  const openModalDelete = () => {
    postStore.post = item;
    setModalDeletePost(true);
    setAnchorEl(false);
  };
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        className="modalUserInfoDeleteButton"
        sx={{
          textTransform: "unset",
          fontSize: "13px",
        }}
        onClick={() => openModalDelete()}
      >
        Remove Post
      </Button>
    </>
  );
};

export default Delete;
