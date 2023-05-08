import React from "react";
import { Box } from "@mui/material";
import Users from "./Users/Users";
import TagUsers from "./TagUsers/TagUsers";

const UsersBox = ({ usersArr, setUsersArr, userTaged, setUserTaged, inputRef }) => {


  return (
    <Box className="modalTagPhotoPostBoxUsers">
      <div className="modalTagPhotoPostDivUsers">
        {userTaged.map((item, index) => {
          return (
            <TagUsers
              key={index}
              item={item}
              setUsersArr={setUsersArr}
              usersArr={usersArr}
              userTaged={userTaged}
              setUserTaged={setUserTaged}
              inputRef={inputRef}
              
            />
          );
        })}

        {usersArr
          .sort((a, b) =>
            a.userName.toLowerCase() > b.userName.toLowerCase() ? 1 : -1
          )
          .map((item, index) => {
            return (
              <Users
                key={index}
                item={item}
                setUsersArr={setUsersArr}
                usersArr={usersArr}
                userTaged={userTaged}
                setUserTaged={setUserTaged}
                inputRef={inputRef}
                
              />
            );
          })}

        {userTaged.length === 0 && usersArr.length === 0 ? (
          <h6 className="modalTagPhotoPostNoResults">Not more results</h6>
        ) : null}
      </div>
    </Box>
  );
};

export default UsersBox;
