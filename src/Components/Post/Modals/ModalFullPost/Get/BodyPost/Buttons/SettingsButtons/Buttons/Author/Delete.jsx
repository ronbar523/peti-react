import React from 'react'
import { Link, MenuItem } from "@mui/material";
import { postStore } from '../../../../../../../../../../Store/Post/PostSotre';

const Delete = ({ item, setAnchorEl, setModalDeletePostModal  }) => {

  const openModalDeletePost = () => {
    postStore.post = item
    setModalDeletePostModal(true)
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

export default Delete;
