import React from "react";
import { Link, MenuItem } from "@mui/material";
import { postStore } from "../../../../../../../../../Store/Post/PostSotre";

const Edit = ({ item, setAnchorEl, setModalEditPhotoPost }) => {
  const openModalEditPost = () => {
    postStore.post = item;
    setModalEditPhotoPost(true);
    setAnchorEl(false);
  };

  return (
    <>
      <MenuItem>
        <Link
          className="text-decoration-none text-dark"
          onClick={() => openModalEditPost()}
        >
          Edit
        </Link>
      </MenuItem>
    </>
  );
};

export default Edit;
