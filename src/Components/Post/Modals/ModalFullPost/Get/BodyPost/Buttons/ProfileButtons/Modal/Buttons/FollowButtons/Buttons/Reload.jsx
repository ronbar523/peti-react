import React from 'react'
import LoadingButton from "@mui/lab/LoadingButton";

const Reload = ({ followLoading }) => {
  return (
    <LoadingButton
      size="small"
      loading={followLoading}
      variant="outlined"
      disabled
      className="modalUserInfoFollowButton"
      sx={{
        width: "100px",
        height: "35px"
      }}
      
    ></LoadingButton>
  );
};

export default Reload;
