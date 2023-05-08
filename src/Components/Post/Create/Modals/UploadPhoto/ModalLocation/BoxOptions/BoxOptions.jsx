import React from "react";
import { Box, Card, CircularProgress } from "@mui/material";
import City from "./City/City";
import Cities from "./Cities/Cities";
import Countries from "./Countries/Countries";

const BoxOptions = ({
  showCities,
  setShowCities,
  setCitiesOfMyCountryLocation,
  showCountries,
  setShowCountries,
  setLocationCountry,
  setText,
  myCityLocation,
  setModalLocation,
  countryText,
  setCountryText,
  setLocation,
  isLoading,
  setIsLoading,
  setCitiesArr,
  inputRef
}) => {

  return (
    <Box className="modalLocationPhotoPostBoxOptions">
      {!isLoading ? (
        <>
          <div className="modalLocationPhotoPostDivOptions">
            <Card>
            {myCityLocation.map((item, index) => {
              return (
                <City
                  key={index}
                  item={item}
                  setModalLocation={setModalLocation}
                />
              );
            })}

           
              {showCountries.map((item, index) => {
                  return (
                    <Countries
                      key={index}
                      item={item}
                      setShowCities={setShowCities}
                      setCitiesOfMyCountryLocation={
                        setCitiesOfMyCountryLocation
                      }
                      setShowCountries={setShowCountries}
                      setLocationCountry={setLocationCountry}
                      setText={setText}
                      setIsLoading={setIsLoading}
                      setCountryText={setCountryText}
                      setCitiesArr={setCitiesArr}
                      inputRef={inputRef}
                    />
                  );
                })
              }

            {showCities.map((item, index) => {
              return (
                <Cities
                  key={index}
                  item={item}
                  countryText={countryText}
                  setLocation={setLocation}
                  setModalLocation={setModalLocation}
                />
              );
            })}

            {showCities.length === 0 &&
            showCountries.length === 0 &&
            myCityLocation.length === 0 ? (
              <h6 className="modalLocationPhotoPostNoResults">Not more results</h6>
            ) : null}
            </Card>
          </div>
        </>
      ) : (
        <CircularProgress className="modalLocationPhotoPostRelaod" />
      )}
    </Box>
  );
};

export default BoxOptions;
