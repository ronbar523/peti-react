import React from "react";
import { CardHeader } from "@mui/material";

const Cities = ({ item, setLocation, countryText, setModalLocation }) => {
  const selectCity = () => {
    const country = countryText.charAt(0).toUpperCase() + countryText.slice(1);
    setLocation(country + " - " + item);
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

export default Cities;
