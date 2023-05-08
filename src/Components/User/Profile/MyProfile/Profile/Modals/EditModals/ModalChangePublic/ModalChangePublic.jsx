import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Accept from "./Buttons/Accept";
import CloseB from "./Buttons/CloseB";
import CloseA from "./Buttons/CloseA";

const ModalChangePublic = ({
  setModalChnagePublic,
  setCountFollowers,
  countFollowers,
  setCountFollowing,
  countFollowing,
  setCountFollowersRequest
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalEditLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Edit Account Status</h5>
              <CloseA setModalChnagePublic={setModalChnagePublic} />
            </div>
            <div className="modal-body">
              <h6 className="py-4 px-2 text-center modalChangePublicText">
                {userStore.user.public
                  ? "Do you want to become private account?"
                  : "All follow requests are automatically approved, Do you want to become public account?"}
              </h6>
            </div>
            <div className="modal-footer">
              <CloseB setModalChnagePublic={setModalChnagePublic} />

              <Accept
                countFollowers={countFollowers}
                setCountFollowers={setCountFollowers}
                countFollowing={countFollowing}
                setCountFollowing={setCountFollowing}
                setModalChnagePublic={setModalChnagePublic}
                setCountFollowersRequest={setCountFollowersRequest}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalChangePublic;
