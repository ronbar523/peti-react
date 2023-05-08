import React from 'react'
import LoadingButton from "@mui/lab/LoadingButton";

const Reload = ({ unBlockLoading }) => {
  return (
    <LoadingButton
      size="small"
      loading={unBlockLoading}
      variant="outlined"
      disabled
      className="modalMyBlockBlockButton"
    ></LoadingButton>
  );
};

export default Reload;
