import React from "react";
import { CardHeader } from "@mui/material";

const City = ({ item, setModalLocation }) => {
  const selectCity = () => {
    setModalLocation(false);
  };

  return (
    <button
      onClick={() => selectCity()}
      className="modalLocationPhotoPostButton"
    >
      <CardHeader
        sx={{ background: "white" }}
        title={<h6 className="modalLocationPhotoPostName">{item}</h6>}
      />
    </button>
  );
};

export default City;
