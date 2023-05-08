import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Location = ({ setLocation, setModalLocation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const getUserLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      await fetch(
        "https://geolocation-db.com/json/a9e48c70-8b22-11ed-8d13-bd165d1291e3"
      ).then((res) =>
        res
          .json()
          .then((data) => setLocation(data.country_name + " - " + data.city))
          .catch(() => {
            setIsLoading(false);
          })
      );
      setIsLoading(false);
      setModalLocation(true)
    } catch (err) {
      setModalLocation(true)
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {!isLoading ? (
        <Button
        className="modalEditPhotoPostButtonBody"
        sx={{
          color: "black",
          textTransform: "unset",
        }}
          onClick={() => getUserLocation()}
        >
          Add Location
        </Button>
      ) : (
        <>
          <LoadingButton
          className="modalEditPhotoPostButtonReloadBody"
          sx={{
            height: 40
          }}
            loading={isLoading}
            disabled
          ></LoadingButton>
        </>
      )}
    </>
  );
};

export default Location;
