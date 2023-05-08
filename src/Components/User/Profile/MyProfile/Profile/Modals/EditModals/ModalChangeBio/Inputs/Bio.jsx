import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const Bio = ({ bio, setBio, inputRef, setDeleteButton }) => {
  const [bioFocus, setBioFocus] = useState(true);
  const [row, setRow] = useState(0);

  useEffect(() => {
    if (bio !== "Wirte something") {
      if (bio === " " || bio === "\n") {
        setBio("");
      } else {
        
        if (bio[0] === " ") {
          let str = bio.substr(1);
          setBio(str);
        } else {
          let strRow = bio.toString().split(/\r?\n/);
          let bioStrArr = [];
          let arr = [];

          for (let x = 0; x < strRow.length; x++) {
            if (strRow[x] !== "") {
              bioStrArr.push(strRow[x]);
            }
          }

          for (let x = 0; x < strRow.length; x++) {
            if (bioStrArr[x] === undefined) {
              bioStrArr[x] = "";
            } else if (bioStrArr[x].length > 16) {
              for (let y = 0; y < 16; y++) {
                arr += bioStrArr[x][y];
              }
              bioStrArr[x] = arr;
            }
          }

          if (strRow.length === 1) {
            return setBio(bioStrArr[0]), setRow(1);
          } else if (strRow.length === 2) {
            if (bioStrArr[1] === " ") {
              return setBio(bioStrArr[0] + "\n"), setRow(2);
            } else {
              if (bioStrArr[1][0] === " ") {
                let str = bioStrArr[1].substr(1);
                bioStrArr[1] = str;
              }
              return setBio(bioStrArr[0] + "\n" + bioStrArr[1]), setRow(2);
            }
          } else {
            if (bioStrArr[2] === " ") {
              return (
                setBio(bioStrArr[0] + "\n" + bioStrArr[1] + "\n"), setRow(2)
              );
            } else {
              if (bioStrArr[1][0] === " ") {
                let str = bioStrArr[1].substr(1);
                bioStrArr[1] = str;
              }

              if (bioStrArr[2][0] === " ") {
                let str = bioStrArr[2].substr(1);
                bioStrArr[2] = str;
              }

              return (
                setBio(
                  bioStrArr[0] + "\n" + bioStrArr[1] + "\n" + bioStrArr[2]
                ),
                setRow(3)
              );
            }
          }
        }
      }
    } else {
      setDeleteButton(false);
      setBio("");
    }
  }, [bio]);

  return (
    <TextField
      required
      id="standard-multiline-static"
      label="Bio"
      size="small"
      className="mt-3 mb-3"
      error={(bio === undefined && !bioFocus) || (bio === "" && !bioFocus)}
      onChange={(e) => setBio(e.target.value)}
      onFocus={() => setBioFocus(true)}
      onBlur={() => setBioFocus(false)}
      value={bio || ""}
      helperText={
        bio !== undefined && bio.length > 0 ? (
          <>
            *Max 16 Charters For Row
            <br />
            *Max {bio.length - (row - 1)}/48 Charters
            <br />
            *Max {row}/3 Rows
          </>
        ) : (
          "Please Write Something"
        )
      }
      rows={3}
      multiline
      inputRef={inputRef}
    />
  );
};

export default Bio;
