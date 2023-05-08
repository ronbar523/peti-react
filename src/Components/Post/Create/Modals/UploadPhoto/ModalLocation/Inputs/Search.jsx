import React from "react";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({
  allData,
  text,
  setText,
  citiesOfMyCountryLocation,
  setShowCountries,
  setMyCityLocation,
  setShowCities,
  setCountryText,
  locationCountry,
  locationCity,
  citiesArr,
  setDisabled,
  inputRef
}) => {
  const searchLocation = (value) => {
    try {
      setText(value);
      setDisabled(true)
      let allSplit = value.split("-");
      let citySplit = "";
      let countrySplit = allSplit[0]
        .substring(allSplit[0].length - 1, 0)
        .toLowerCase();

      if (allSplit[1] !== undefined) {
        citySplit = allSplit[1].substring(1).toLowerCase();
      }

      if (countrySplit !== locationCountry || value.indexOf("-") === -1) {
        let countrySplit2 = allSplit[0]
          .substring(allSplit[0].length, 0)
          .toLowerCase();

        let arrCountries = allData.filter((countries) =>
          countries.country.toLowerCase().startsWith(countrySplit2)
        );

        setShowCountries(arrCountries);
        setMyCityLocation([]);
        setShowCities([]);
      }

      if (citySplit !== locationCity && value.indexOf("-") !== -1) {
        setMyCityLocation([]);
        if (countrySplit === locationCountry) {
          let arrCities = [];
          if (citiesOfMyCountryLocation.length > 0) {
            arrCities = citiesOfMyCountryLocation.filter((cities) =>
              cities.toLowerCase().startsWith(citySplit)
            );
          } else {
            
            arrCities = citiesArr.filter((cities) =>
              cities.toLowerCase().startsWith(citySplit)
            );
          }
          setShowCities(arrCities);
          setCountryText(countrySplit);
        }
      }
    } catch {}
  };

  return (
    <Box className="modalLocationPhotoPostBoxSearch">
      <Paper className="modalLocationPhotoPostSearch">
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          value={text}
          onChange={(event) => searchLocation(event.target.value)}
          placeholder="Search Location"
          inputRef={inputRef}
        />
        <IconButton
          type="button"
          sx={{ p: "8px", mr: 0.8 }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
