import React, { useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../Store/User/UserStore";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const BioButton = ({ setModalEditBio }) => {
  
  const [editBioIcon, setEditBioIcon] = useState(false);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <button
        className={
          editBioIcon
            ? "myProfileButtonEditBio myProfileOpacity"
            : "myProfileButtonEditBio"
        }
        onMouseEnter={() => setEditBioIcon(true)}
        onMouseLeave={() => setEditBioIcon(false)}
        onClick={() => setModalEditBio(true)}
      >
        <p className="myProfileBioText"> {userStore.user.bio} </p>
      </button>
      <button
        onClick={() => setModalEditBio(true)}
        className="myProfileButtonIconEditBio"
      >
        <BorderColorIcon
          sx={{
            fontSize: "13px",
            ml: "7px",
            color:
              editBioIcon || userStore.user.bio === "Wirte something"
                ? "blue"
                : "white",
          }}
        />
      </button>
    </>
  );
};

export default BioButton;
