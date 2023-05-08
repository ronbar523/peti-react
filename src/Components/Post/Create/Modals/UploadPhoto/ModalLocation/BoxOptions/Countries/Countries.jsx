import React from "react";
import { CardHeader } from "@mui/material";

const Countries = ({
  item,
  setIsLoading,
  setShowCities,
  setShowCountries,
  setText,
  setLocationCountry,
  setCountryText,
  setCitiesOfMyCountryLocation,
  setCitiesArr,
  inputRef,
}) => {
  const slectCountry = () => {
    setShowCountries([]);
    setCitiesOfMyCountryLocation([]);
    setShowCities(item.cities);
    setCitiesArr(item.cities);
    setLocationCountry(item.country.toLowerCase());
    setText(item.country + " - ");
    setCountryText(item.country);
    setIsLoading(false);
    inputRef.current.focus();
  };

  return (
    <button
      onClick={() => slectCountry()}
      className="modalLocationPhotoPostButton"
    >
      <CardHeader
        sx={{ background: "white" }}
        title={<h6 className="modalLocationPhotoPostName">{item.country}</h6>}
      />
    </button>
  );
};

export default Countries;
