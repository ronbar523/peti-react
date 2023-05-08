import React, { useEffect } from "react";
import { userStore } from "../../../../../Store/User/UserStore";
import { Grid, Paper, Typography } from "@mui/material";
import ImageButton from "../Profile/Buttons/EditButtons/ImageButton";
import UserNameButton from "../Profile/Buttons/EditButtons/UserNameButton";
import FullNameButton from "../Profile/Buttons/EditButtons/FullNameButton";
import BioButton from "../Profile/Buttons/EditButtons/BioButton";
import IconOptionsButton from "../Profile/Buttons/SettingsButtons/IconOptionsButton";
import MyFollowingButton from "../Profile/Buttons/FollowButtons/MyFollowingButton";
import MyFollowersButton from "../Profile/Buttons/FollowButtons/MyFollowersButton";
import MyPostButton from "./Buttons/PostButtons/MyPostButton";

const CardMyProfile = ({
  setModalEditProfilePhoto,
  setModalEditName,
  setModalEditUserName,
  setModalEditBio,
  setModalChangePassword,
  setModalChangeEmail,
  setModalChnagePublic,
  setModalMyFollowing,
  setModalMyFollowers,
  setModalDeleteMyUser,
  setModalMyRequestFollowers,
  countFollowing,
  countFollowers,
  countFollowersRequest,
  setModalMyBlock,
  countBlock,
  totalPosts,
  setTotalPosts,
}) => {
  useEffect(() => {
    const total =
      userStore.user.myPostPhotoLength +
      userStore.user.myPostTextLength +
      userStore.user.myPostVideoLength;
    setTotalPosts(total);
  }, []);

  return (
    <>
      <Paper
        className="myProfileCard"
        sx={{
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <UserNameButton setModalEditUserName={setModalEditUserName} />
          </Grid>
          <Grid item xs={2}>
            <IconOptionsButton
              setModalChangePassword={setModalChangePassword}
              setModalChangeEmail={setModalChangeEmail}
              setModalChnagePublic={setModalChnagePublic}
              setModalMyRequestFollowers={setModalMyRequestFollowers}
              setModalDeleteMyUser={setModalDeleteMyUser}
              countFollowersRequest={countFollowersRequest}
              setModalMyBlock={setModalMyBlock}
              countBlock={countBlock}
            />
          </Grid>
          <Grid item sx={{ marginTop: "-10px" }}>
            <ImageButton setModalEditProfilePhoto={setModalEditProfilePhoto} />
          </Grid>
          <Grid item xs sm container>
            <Grid item xs container spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <FullNameButton setModalEditName={setModalEditName} />
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <BioButton setModalEditBio={setModalEditBio} />
                </Typography>
                <hr className="myProfileHr" />

                <div className="myProfileDivBoxs">
                  <MyPostButton totalPosts={totalPosts} />

                  <MyFollowersButton
                    countFollowers={countFollowers}
                    setModalMyFollowers={setModalMyFollowers}
                  />

                  <MyFollowingButton
                    countFollowing={countFollowing}
                    setModalMyFollowing={setModalMyFollowing}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CardMyProfile;
