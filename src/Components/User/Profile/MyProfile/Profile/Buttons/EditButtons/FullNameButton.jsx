import React, { useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../Store/User/UserStore";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const FullNameButton = ({ setModalEditName }) => {
  
  const [editFullNameIcon, setEditFullNameIcon] = useState(false);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <button
        className="myProfileButtonEditFullName"
        onMouseEnter={() => setEditFullNameIcon(true)}
        onMouseLeave={() => setEditFullNameIcon(false)}
        onClick={() => setModalEditName(true)}
      >
        <b className={editFullNameIcon ? "myProfileOpacity" : ""}>
          {userStore.user.fullName}
        </b>

        <BorderColorIcon
          sx={{
            fontSize: "15px",
            mt: "-3px",
            ml: "10px",
            color: editFullNameIcon ? "blue" : "white",
          }}
        />
      </button>
    </>
  );
};

export default FullNameButton;
