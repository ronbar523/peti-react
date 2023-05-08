import React, { useCallback } from "react";
import { removeBlockUser } from "../../../../../../../Services/BlockServices/BlockEditServices";
import { Button } from "@mui/material";

const MyBlocked = ({
  item,
  setDisabledButtons,
  setFollowLoading,
  setUserDeleted,
  setMyBlock,
  inputRef
}) => {
  const removeBlockFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setFollowLoading(true);
      await removeBlockUser(item._id).then((res) => {
        if (res.data.userDeletedFlag) {
          setUserDeleted(true);
        }
        setMyBlock(false);
      });
      inputRef.current.focus()
      setFollowLoading(false);
      setDisabledButtons(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <Button
      variant="outlined"
      color="inherit"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
      }}
      className="modalCommentLikesFollowButton"
      onClick={() => removeBlockFunction()}
    >
      UnBlock
    </Button>
  );
};

export default MyBlocked;
