import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../Store/User/UserStore";
import { verifyUser } from "../../../Services/UserServices/UserEditService";
import ModalReload from "../../../Components/User/LoginSystem/Verify/ModalReload/ModalReload";
import ModalSuccess from "../../../Components/User/LoginSystem/Verify/ModalSeccess/ModalSuccess";
import ModalError from "../../../Components/User/LoginSystem/Verify/ModalError/ModalError";

const Verify = () => {
  const [verify, setVerify] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href;
        const urlWordsArr = url.split(/[=&]/);
        const email = urlWordsArr[1];
        const verifySecureNumber = urlWordsArr[3];
        await verifyUser(email, verifySecureNumber);
        setVerify(true);
        setIsLoading(false);
      } catch (err) {
        if (
          err.response.data.err === "Request not available" ||
          err.response.data.err === "Email not exist"
        ) {
          setIsLoading(false);
        } else {
          window.location.reload();
        }
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      {userStore.user.verify && <Navigate to="/my_profile" />}
      {!isLoading ? (
        <>{verify ? <ModalSuccess /> : <ModalError />}</>
      ) : (
        <ModalReload />
      )}
    </>
  );
};

export default Verify;
