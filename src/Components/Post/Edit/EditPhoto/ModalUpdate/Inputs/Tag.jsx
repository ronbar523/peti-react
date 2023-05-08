import React from 'react'
import { Box, TextField } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";


const Tag = ({ userTaged, setModalTag }) => {
  return (
    <Box
    className="modalEditPhotoPostBoxInput"
    >
      <PeopleAltIcon sx={{ mr: 1, my: 1.6, fontSize: "22px" }} color="primary" />
      <TextField
        id="input-with-sx"
        variant="standard"
        className="modalEditPhotoPostInput"
        inputProps={{
          style: { fontSize: 14 },
        }}
        
        value={
          userTaged.length === 1
            ? userTaged[0].userName
            : userTaged[0].userName + "..."
        }
        onClick={() => setModalTag(true)}
      />
    </Box>
  );
};

export default Tag;
