import React from "react";
import { Card, CardHeader } from "@mui/material";

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
  inputRef
}) => {


  const slectCountry = () => {
    setShowCountries([]);
    setCitiesOfMyCountryLocation([])
    setShowCities(item.cities);
    setCitiesArr(item.cities);
    setLocationCountry(item.country.toLowerCase());
    setText(item.country + " - ");
    setCountryText(item.country )
    setIsLoading(false);
    inputRef.current.focus();
  };

  return (
    <button onClick={() => slectCountry()}  className="modalLocationPhotoPostButton">
    <Card>
      <CardHeader
        title={<h6 className="modalLocationPhotoPostName">{item.country}</h6>}
      />
    </Card>
  </button>
  );
};

export default Countries;
