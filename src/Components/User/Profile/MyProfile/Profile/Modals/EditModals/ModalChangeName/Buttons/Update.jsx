import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { changeNameUser } from "../../../../../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Update = ({ firstName, lastName, setModalEditName }) => {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const updateName = useCallback(async () => {
    setIsLoadingUpdate(true);
    try {
      const requestBody = {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + " " + lastName,
      };

      await changeNameUser(requestBody);

      userStore.user.firstName = firstName;
      userStore.user.lastName = lastName;
      userStore.user.fullName = firstName + " " + lastName;

      document.body.style.overflow = "visible";
      setModalEditName(false);
    } catch {
      window.location.reload();
    }
  }, [firstName, lastName]);

  return (
    <>
      {!isLoadingUpdate ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            height: 37,
            width: 79,
          }}
          disabled={
            (userStore.user.lastName === lastName &&
              userStore.user.firstName === firstName) ||
            firstName.length === 0 ||
            lastName.length === 0
          }
          onClick={() => updateName()}
        >
          Update
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingUpdate}
          variant="outlined"
          disabled
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            height: 37,
            width: 79,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Update;
