import React, { useEffect } from 'react'
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const Description = ({ description, setDescription, inputRefDescription }) => {


  useEffect(() => {
    inputRefDescription.current.focus();
  },[])

  useEffect(() => {
    if(description === " " || description === "\n"){
      setDescription("")
    } else {
      if(description[0] === " "){
       let str = description.substr(1)
       setDescription(str)
      }
    }
  }, [description])

  return (
    <Box className="modalDescriptionPhotoPostBoxBody">
    <TextField
      
      className='modalDescriptionPhotoPostInput'
      id="outlined-multiline-static"
      label="Description"
      multiline
      placeholder="Write something"
      rows={11}
      inputProps={{ maxLength: 1000 }}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      inputRef={inputRefDescription}
      
    />
    </Box>
  );
};

export default Description;
