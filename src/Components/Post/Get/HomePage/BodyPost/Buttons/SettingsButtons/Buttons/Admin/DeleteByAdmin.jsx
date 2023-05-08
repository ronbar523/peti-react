import React from 'react'
import { Link, MenuItem } from "@mui/material";
import { postStore } from '../../../../../../../../../Store/Post/PostSotre';

const DeleteByAdmin = ({ item, setAnchorEl, setModalDeletePost  }) => {

  const openModalDeletePost = () => {
    postStore.post = item
    setModalDeletePost(true)
    setAnchorEl(false)
  }
  return (
    <>
      <MenuItem>
        <Link className="text-decoration-none text-dark" onClick={() => openModalDeletePost()}>Delete</Link>
      </MenuItem>
    </>
  );
};

export default DeleteByAdmin;
