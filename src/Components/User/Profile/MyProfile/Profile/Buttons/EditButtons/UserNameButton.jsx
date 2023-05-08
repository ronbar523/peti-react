import React, { useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../Store/User/UserStore";
import BorderColorIcon from "@mui/icons-material/BorderColor";


const UserNameButton = ({ setModalEditUserName }) => {
  const [editUserNameIcon, setEditUserNameIcon] = useState(false);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
        <button
          className="myProfileButtonEditUserName"
          onMouseEnter={() => setEditUserNameIcon(true)}
          onMouseLeave={() => setEditUserNameIcon(false)}
          onClick={() => setModalEditUserName(true)}
        >
          <b className={editUserNameIcon ? "myProfileOpacity" : ""}>
            {" "}
            {userStore.user.userName}{" "}
          </b>

          <BorderColorIcon
            sx={{
              fontSize: "16px",
              color: editUserNameIcon ? "blue" : "white",
            }}
          />
        </button>
      
    </>
  );
};

export default UserNameButton;
