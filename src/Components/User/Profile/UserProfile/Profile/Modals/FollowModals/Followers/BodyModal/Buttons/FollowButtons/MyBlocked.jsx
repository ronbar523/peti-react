import React, { useCallback } from "react";
import { removeBlockUser } from "../../../../../../../../../../../Services/BlockServices/BlockEditServices";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";

const MyBlocked = ({
  item,
  setFollowLoading,
  setDisabledButtons,
  setUserDeleted,
  setMyBlock,
  inputRef
}) => {
    
  const removeBlockFunction = useCallback(async () => {
    setFollowLoading(true);
    setDisabledButtons(true);
    try {
      await removeBlockUser(item._id).then((res) => {
        if (res.data.userDeletedFlag) {
          setUserDeleted(true);
        }
        for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
          if (userStore.user.arrMyBlock[x] === item._id) {
            userStore.user.arrMyBlock.splice(x, 1);
            break;
          }
        }
        setMyBlock(false);
      });
      setFollowLoading(false);
      setDisabledButtons(false);
      inputRef.current.focus()
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
      className="modalFollowersFollowButton"
      onClick={() => removeBlockFunction()}
    >
      UnBlock
    </Button>
  );
};

export default MyBlocked;
