import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Close from "./Buttons/Close";
import Cancel from "./Buttons/Concel";
import RemoveFollower from "./Buttons/RemoveFollower";

const AlredayAccept = ({
  user,
  follow,
  setFollow,
  setFollowAfterMe,
  setIBlockUser,
  setUserBlockMe,
  setModalUserDeleted,
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  setModalAlredayAcceptRequest,
}) => {
  const [unFollowerLoading, setUnFollowerLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalMessageLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Expired Request</h5>
              <Close
                user={user}
                setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
                unFollowerLoading={unFollowerLoading}
                setFollowAfterMe={setFollowAfterMe}
                countFollowers={countFollowers}
                setCountFollowers={setCountFollowers}
                countFollowing={countFollowing}
                setCountFollowing={setCountFollowing}
              />
            </div>
            <div>
              <div className="modal-body">
                <h6 className="p-4 text-center modalMessageText">
                  You alreday accept this request!
                  <br />
                  Do you want to remove this follower?
                </h6>
              </div>
              <div className="modal-footer modalMessageFotter">
                <RemoveFollower
                  user={user}
                  setFollowAfterMe={setFollowAfterMe}
                  setUserBlockMe={setUserBlockMe}
                  setModalUserDeleted={setModalUserDeleted}
                  setIBlockUser={setIBlockUser}
                  follow={follow}
                  setFollow={setFollow}
                  countFollowers={countFollowers}
                  setCountFollowers={setCountFollowers}
                  countFollowing={countFollowing}
                  setCountFollowing={setCountFollowing}
                  setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
                  unFollowerLoading={unFollowerLoading}
                  setUnFollowerLoading={setUnFollowerLoading}
                />
                <Cancel
                  user={user}
                  setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
                  unFollowerLoading={unFollowerLoading}
                  setFollowAfterMe={setFollowAfterMe}
                  countFollowers={countFollowers}
                  setCountFollowers={setCountFollowers}
                  countFollowing={countFollowing}
                  setCountFollowing={setCountFollowing}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlredayAccept;
