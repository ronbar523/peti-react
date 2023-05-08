import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { removeBlockUser } from "../../../../../Services/BlockServices/BlockEditServices";
import { userStore } from "../../../../../Store/User/UserStore";

const MyBlocked = ({
  item,
  setFollowLoading,
  setUserDeleted,
  setMyBlock,
}) => {
    
  const removeBlockFunction = useCallback(async () => {
    setFollowLoading(true);
    try {
      await removeBlockUser(item._id).then((res) => {
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
      });
      setFollowLoading(false);
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
      className="SearchUserBodyFollowButton"
      onClick={() => removeBlockFunction()}
    >
      UnBlock
    </Button>
  );
};

export default MyBlocked;
