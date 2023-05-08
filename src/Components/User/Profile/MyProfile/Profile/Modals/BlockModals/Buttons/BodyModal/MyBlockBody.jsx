import React, { useEffect, useState } from "react";
import Profile from "./ProfileButtons/Profile";
import Reload from "./BlockButtons/Reload";
import UnBlock from "./BlockButtons/UnBlock";
import { userStore } from "../../../../../../../../../Store/User/UserStore";

const MyBlockBody = ({
  item,
  setDisabledButtons,
  totalBlockUser,
  setTotalBlockUser,
  text,
  unBlockAll,
  skipCount,
  setSkipCount,
  inputRef
}) => {
  const [unBlockLoading, setUnBlockLoading] = useState(false);
  const [block, setBlock] = useState(true);

  useEffect(() => {
    if (!unBlockAll) {
      let flag = false;
      for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
        if (userStore.user.arrMyBlock[x] === item._id) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        setBlock(false);
      }
    } else {
      setBlock(false);
    }
  }, [text, unBlockAll]);

  return (
    <div className="modalMyBlockDivUser">
      <Profile item={item} />

      {block ? (
        <>
          {unBlockLoading ? (
            <Reload unBlockLoading={unBlockLoading} />
          ) : (
            <UnBlock
              item={item}
              setDisabledButtons={setDisabledButtons}
              setBlock={setBlock}
              setUnBlockLoading={setUnBlockLoading}
              totalBlockUser={totalBlockUser}
              setTotalBlockUser={setTotalBlockUser}
              skipCount={skipCount}
              setSkipCount={setSkipCount}
              inputRef={inputRef}
            />
          )}
        </>
      ) : null}
    </div>
  );
};

export default MyBlockBody;
