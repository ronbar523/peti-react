import React from "react";
import { Avatar, Card, CardHeader } from "@mui/material";


const Users = ({ item, userTaged, usersArr, setUsersArr, setUserTaged, inputRef }) => {
  const tagFunction = () => {
    inputRef.current.focus();
    setUserTaged([item, ...userTaged]);
    for (let x = 0; x < usersArr.length; x++) {
      if (item._id === usersArr[x]._id) {
        let arr = usersArr;
        arr.splice(x, 1);
        setUsersArr(arr);
        break;
      }
    }
  };


  return (
    <button className="modalTagPhotoPostButton" onClick={() => tagFunction()}>
      <Card >
        <CardHeader
          avatar={<Avatar src={item.photo} aria-label="recipe" />}
          title={
            <>
              <h6 className="modalTagPhotoPostName">
                {item.userName}
                
              </h6>
            </>
          }
        />
      </Card>
    </button>
  );
};

export default Users;
