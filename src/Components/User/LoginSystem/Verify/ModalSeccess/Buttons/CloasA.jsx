import React from "react";
import { userStore } from "../../../../../../Store/User/UserStore";

const CloseA = () => {
  const closeModal = () => {
    if (userStore.isLogin) {
      window.location = "/my_profile";
    } else {
      window.location = "/";
    }
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
