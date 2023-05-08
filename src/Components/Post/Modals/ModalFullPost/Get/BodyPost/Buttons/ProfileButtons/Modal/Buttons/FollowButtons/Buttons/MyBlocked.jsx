import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../../Store/User/UserStore";
import { removeBlockUser } from "../../../../../../../../../../../../Services/BlockServices/BlockEditServices";
import { Button } from "@mui/material";

const MyBlocked = ({
  item,
  setDisabledClose,
  setFollowLoading,
  setUserDeleted,
  setMyBlock,
  user,
  setStatusFollow,
}) => {
  const removeBlockFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      setFollowLoading(true);

      await removeBlockUser(item.createdBy).then((res) => {
        if (res.data.userDeletedFlag) {
          setUserDeleted(true);
        }

        setMyBlock(false);
        for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
          if (userStore.user.arrMyBlock[x] === item.createdBy) {
            userStore.user.arrMyBlock.splice(x, 1);
            break;
          }
        }

        if (user !== undefined) {
          if (user._id === item.createdBy) {
            setStatusFollow(true);
          }
        }
      });
      setFollowLoading(false);
      setDisabledClose(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <Button
      variant="outlined"
      color="inherit"
      className="modalUserInfoFollowButton"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
        width: "100px",
        height: "35px",
      }}
      onClick={() => removeBlockFunction()}
    >
      UnBlock
    </Button>
  );
};

export default MyBlocked;
