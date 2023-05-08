import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const Reload = ({ followLoading }) => {
  return (
    <LoadingButton
      size="small"
      loading={followLoading}
      variant="outlined"
      disabled
      className="modalMyFollowingFollowButton"
    ></LoadingButton>
  );
};

export default Reload;
