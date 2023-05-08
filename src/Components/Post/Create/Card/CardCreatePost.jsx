import React from "react";
import { userStore } from "../../../../Store/User/UserStore";
import { Avatar, CardHeader, Paper } from "@mui/material";
import Photo from "./Buttons/Photo";
import Video from "./Buttons/Video";
import Post from "./Buttons/Post";

const CardCreatePost = ({ setModalCreatePhotoPost }) => {
  return (
    <>
      {userStore.isLogin ? (
        <Paper
          className="cardCreatePost"
          sx={{
            p: 1.3,
            margin: "auto",
            mt: "25px",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <CardHeader
            className="cardCreatePostCard"
            sx={{ height: 56 }}
            avatar={
              <Avatar
                src={userStore.user.photo}
                sx={{ width: 55, height: 55, ml: "-9px" }}
              />
            }
            title={
              <h4 className="cardCreatePostCardTitle">
                {" "}
                Feel free to share...{" "}
              </h4>
            }
           
          />

          <hr />

          <div className="d-inline">
            <Photo setModalCreatePhotoPost={setModalCreatePhotoPost} />
            <Video />
            <Post />
          </div>
        </Paper>
      ) : null}
    </>
  );
};

export default CardCreatePost;
