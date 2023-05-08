import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Location = ({ location, modalLocation, setModalLocation }) => {
  const [showLocation, setShowLocation] = useState("");

  useEffect(() => {
    if (!modalLocation) {
      if (location !== "") {
        let stringSplit = location.split("");

        if (stringSplit.length > 13) {
          let stringSplit2 = location.split(" ");
          let city = ""
          if(stringSplit2[3] !== undefined ){
            if(stringSplit2[4] !== undefined){
              city = stringSplit2[2] + " " + stringSplit2[3] + " " + stringSplit2[4]
            }
             city = stringSplit2[2] + " " + stringSplit2[3];
          } else {
             city = stringSplit2[2]
          }
          
          let citySplit = city.split("");
          if (citySplit.length > 13) {
            let sliceCity = citySplit.slice(0, 13);
            if (sliceCity[12] === "") {
              sliceCity.pop();
            }
            let locationString = sliceCity.join("");
            setShowLocation(locationString + "...");
          } else {
            if(stringSplit2[3] !== undefined ){
              if(stringSplit2[4] !== undefined){
                setShowLocation(stringSplit2[2] + " " + stringSplit2[3] + " " + stringSplit2[4] )
              } else {
                setShowLocation(stringSplit2[2] + " " + stringSplit2[3])
              }
            } else {

              setShowLocation(stringSplit2[2]);
            }
          }
        }
      }
    }
  }, [modalLocation]);


  return (
    <>
      <Box className="modalUploadPhotoPostBoxInput">
        <LocationOnIcon
          sx={{ mr: 1, my: 1.8, fontSize: "21.5px" }}
          color="primary"
        />
        <TextField
          id="input-with-sx"
          variant="standard"
          inputProps={{
            style: { fontSize: 14 },
          }}
          className="modalUploadPhotoPostInput"
          value={showLocation}
          onClick={() => setModalLocation(true)}
        />
      </Box>
    </>
  );
};

export default Location;
