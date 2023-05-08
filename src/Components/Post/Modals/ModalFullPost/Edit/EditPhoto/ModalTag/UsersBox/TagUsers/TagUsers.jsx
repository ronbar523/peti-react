import React from "react";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const UserTags = ({ item, userTaged, usersArr, setUsersArr, setUserTaged, inputRef }) => {
  const removeTagFunction = () => {
    inputRef.current.focus();
    setUsersArr([...usersArr, item]);
    for (let x = 0; x < userTaged.length; x++) {
      if (item._id === userTaged[x]._id) {
        let arr = userTaged;
        arr.splice(x, 1);
        setUserTaged(arr);
        break;
      }
    }
  };

  return (
    <>
      <Card className="modalTagPhotoPostCard">
        <CardHeader
          avatar={<Avatar src={item.photo} aria-label="recipe" />}
          title={<h6 className="modalTagPhotoPostName">{item.userName}</h6>}
        />

        <IconButton
          className="modalTagPhotoPostIconRemove"
          onClick={() => removeTagFunction()}
        >
          <CloseIcon color="error" sx={{ fontSize: "25px" }} />
        </IconButton>
      </Card>
    </>
  );
};

export default UserTags;
