import React, { useEffect, useRef, useState } from "react";
import "../../../../../../../Css/Post/Edit/ModalEditPhotoPost/ModalTagPhotoPost.css"
import { findUsersFormMyFollowers } from "../../../../../../../Services/UserServices/UserGetService";
import { Box, CircularProgress } from "@mui/material";
import Close from "./Buttons/Close";
import UnTagAll from "./Buttons/UnTagAll";
import Done from "./Buttons/Done";
import Search from "./Input/Search";
import UsersBox from "./UsersBox/UsersBox";

const ModalTag = ({ setModalTag, userTaged, setUserTaged }) => {

  const inputRef = useRef()

  const [isLoading, setIsLoading] = useState(true);
  const [usersArr, setUsersArr] = useState([]);


  useEffect(() => {
    if (userTaged.length === 0) {
      const fetchData = async () => {
        try {
          const limit = 15;
          await findUsersFormMyFollowers(limit).then((res) => {
            setUsersArr(res.data);
          });
        } catch {
          window.location.reload();
        }
        
      };
      fetchData().catch(console.error);
    }
    setIsLoading(false);
  }, []);


  return (
    <>
      <div
        className="modal show fade d-block modalTagPhotoPostLocation"
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Upload Photo</h5>
              <Close setModalTag={setModalTag} />
            </div>

            <Search
              setUsersArr={setUsersArr}
              setModalTag={setModalTag}
              userTaged={userTaged}
              inputRef={inputRef}
            />

            <hr />
            {!isLoading ? (
              <UsersBox
                userTaged={userTaged}
                usersArr={usersArr}
                setUsersArr={setUsersArr}
                setUserTaged={setUserTaged}
                inputRef={inputRef}
              />
            ) : (
              <Box className="modalTagPhotoPostBoxUsers" >
                <CircularProgress className="modalTagPhotoPostRelaod" />
              </Box>
            )}

            <hr className="modalTagPhotoPostHr" />

            <div>
              <UnTagAll
                userTaged={userTaged}
                setUserTaged={setUserTaged}
                usersArr={usersArr}
                setUsersArr={setUsersArr}
                inputRef={inputRef}
              />
              <Done setModalTag={setModalTag} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTag;
