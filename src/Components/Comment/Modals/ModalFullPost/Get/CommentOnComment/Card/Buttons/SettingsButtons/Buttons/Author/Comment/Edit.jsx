import React from 'react'
import { MenuItem } from '@mui/material';

const Edit = ({ setEditComment }) => {
    return ( <MenuItem onClick={() => setEditComment(true)}>Edit</MenuItem> );
}
 
export default Edit;