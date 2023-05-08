import { Button } from "@mui/material";
import React from "react";
import { postStore } from "../../../../../../../../../../../Store/Post/PostSotre";

const Edit = ({ item, setModalEditPhotoPostModal, setAnchorEl }) => {

  const openModalEdit = () => {
    postStore.post = item;
    setModalEditPhotoPostModal(true);
    setAnchorEl(false);
  };
  
  return (
    <Button
      variant="outlined"
      className="modalUserInfoEditButton"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
        width: "105px",
      }}
      onClick={() => openModalEdit()}
    >
      Edit Post
    </Button>
  );
};

export default Edit;
