import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";

const Description = ({
  description,
  modalDescription,
  setModalDescription,
}) => {
  const [showDescription, setShowDescription] = useState("");

  useEffect(() => {
    if (!modalDescription) {
      let stringRows = description.split(/\r?\n/);

      let shortString = "";

      if (stringRows[0].length > 13) {
        for (let x = 0; x < 13; x++) {
          shortString += stringRows[0][x];
        }
      }

      if (shortString !== "") {
        let string = shortString.split("");
        for (let x = 12; x >= 0; x--) {
          if (string[x] === " " || string[x] === undefined) {
            string.splice(x);
          } else {
            break;
          }
        }

        let newString = string.join("");
        setShowDescription(newString + "...");
      } else {
        let string = stringRows[0].split("");

        for (let x = 12; x >= 0; x--) {
          if (string[x] === " " || string[x] === undefined) {
            string.splice(x);
          } else {
            break;
          }
        }

        if (stringRows.length > 1) {
          let newString = string.join("");
          setShowDescription(newString + "...");
        } else {
          setShowDescription(description);
        }
      }
    }
  }, [modalDescription]);

  return (
    <>
      <Box className="modalEditPhotoPostBoxInput">
        <ModeIcon sx={{ mr: 1, my: 1.8, fontSize: "20px" }} color="primary" />
        <TextField
          onClick={() => setModalDescription(true)}
          id="input-with-sx"
          value={showDescription}
          variant="standard"
          inputProps={{
            style: { fontSize: 14 },
          }}
          className="modalEditPhotoPostInput"
        />
      </Box>
    </>
  );
};

export default Description;
