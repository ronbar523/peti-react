import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const RequestExpired = ({setModalRequestFollowersExpired}) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
      }, []);
    
      
    return (  <>
        {!userStore.isLogin && <Navigate to="/" />}
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog model-border model-block modalMessageLocation">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="pt-2 px-2">Expired Request</h5>
                <CloseA setModalRequestFollowersExpired={setModalRequestFollowersExpired} />
              </div>
              <div>
                <div className="modal-body">
                  <h6 className="p-4 text-center modalMessageText">Request not available!</h6>
                </div>
                <div className="modal-footer modalMessageFotter">
                  <CloseB setModalRequestFollowersExpired={setModalRequestFollowersExpired}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> );
}
 
export default RequestExpired;