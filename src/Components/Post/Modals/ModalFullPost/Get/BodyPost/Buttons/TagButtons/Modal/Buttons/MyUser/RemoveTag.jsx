import React, { useCallback } from "react";
import { removeMyTag } from "../../../../../../../../../../../Services/PostServices/PostEditService";
import { Button } from "@mui/material";

const RemoveTag = ({ item, setRemoveTag, setDisabledClose }) => {
  const removeMyTagFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      const id = item._id;

      await removeMyTag(id);

      setRemoveTag(true);
      setDisabledClose(false);
    } catch {
      window.location.reload();
    }
  }, []);


  
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        className="modalUserInfoTagButton"
        sx={{
          textTransform: "unset",
          fontSize: "13px",
          height: "35px",
        }}
        onClick={() => removeMyTagFunction()}
      >
        Remove Tag
      </Button>
    </>
  );
};

export default RemoveTag;
