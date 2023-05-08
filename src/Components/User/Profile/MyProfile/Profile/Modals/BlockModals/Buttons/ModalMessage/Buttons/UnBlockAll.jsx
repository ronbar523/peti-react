import React, { useCallback } from "react";
import { removeAllBlockUser } from "../../../../../../../../../../Services/BlockServices/BlockEditServices";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const UnBlockAll = ({
  isLoadingUnBlockAll,
  setIsLoadingUnBlockAll,
  setModalUnBlockAll,
  setCountBlock,
  setUnBlockAll,
  setTotalBlockUser
}) => {
  const unBlockAllFunction = useCallback(async () => {
    try {
      setIsLoadingUnBlockAll(true);

      await removeAllBlockUser();

      userStore.user.arrMyBlock = []
      setTotalBlockUser(0)
      setCountBlock(0);
      setUnBlockAll(true)
      setModalUnBlockAll(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <>
      {isLoadingUnBlockAll ? (
        <LoadingButton
          loading={isLoadingUnBlockAll}
          variant="outlined"
          disabled
          className="modalBlockMessageAcceptButton"
        ></LoadingButton>
      ) : (
        <Button
          variant="outlined"
          className="modalBlockMessageAcceptButton"
          sx={{
            textTransform: "unset",
          }}
          onClick={() => unBlockAllFunction()}
        >
          Aceept
        </Button>
      )}
    </>
  );
};

export default UnBlockAll;
