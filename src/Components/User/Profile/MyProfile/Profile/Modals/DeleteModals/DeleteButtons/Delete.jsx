import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { deleteMyUser } from "../../../../../../../../Services/UserServices/UserDeleteService";

const Delete = ({ setModalDeleteMyUser }) => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(true);

  const deletUserFunction = useCallback(async () => {
    try {
      setIsLoadingDelete(true);
      await deleteMyUser();
      setModalDeleteMyUser(false);
      window.location = "/";
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <>
      {isLoadingDelete ? (
        <Button
          variant="outlined"
          color="error"
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            height: 36,
            width: 75
          }}
          onClick={() => deletUserFunction()}
        >
          Delete
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingDelete}
          variant="outlined"
          disabled
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            height: 36,
            width: 75
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Delete;
