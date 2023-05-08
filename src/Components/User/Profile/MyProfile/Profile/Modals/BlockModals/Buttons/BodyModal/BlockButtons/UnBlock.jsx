import React, { useCallback } from "react";
import { removeBlockUser } from "../../../../../../../../../../Services/BlockServices/BlockEditServices";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const UnBlock = ({
  item,
  setDisabledButtons,
  setUnBlockLoading,
  setBlock,
  totalBlockUser,
  setTotalBlockUser,
  skipCount,
  setSkipCount,
  inputRef
}) => {
  const removeBlockFunction = useCallback(async () => {
    try {
      setUnBlockLoading(true);
      setDisabledButtons(true);
      await removeBlockUser(item._id);
      setBlock(false);
      setTotalBlockUser(totalBlockUser - 1);

      for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
        if (userStore.user.arrMyBlock[x] === item._id) {
          userStore.user.arrMyBlock.splice(x, 1);
          break;
        }
      }

      inputRef.current.focus()
      setSkipCount(skipCount - 1);

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
      className="modalMyBlockBlockButton"
      onClick={() => removeBlockFunction()}
    >
      Unblock
    </Button>
  );
};

export default UnBlock;
