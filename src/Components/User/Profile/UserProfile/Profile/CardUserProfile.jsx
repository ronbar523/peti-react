import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../Store/User/UserStore";
import { Grid, Paper, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconOptionsButton from "./Buttons/SettingsUserButton/IconOptionsButton";
import ImageButton from "./Buttons/ImageButton/ImageButton";
import FollowersButton from "./Buttons/FollowButtonsBox/FollowersButton";
import FollowingButton from "./Buttons/FollowButtonsBox/FollowingButton";
import FollowButtons from "./Buttons/FollowButtons/FollowButtons";
import FollowRequestButtons from "./Buttons/FollowRequestButtons/FollowRequestButtons";
import PostButton from "./Buttons/PostButtons/PostButton";

const CardUserProfile = ({
  user,
  userBlockMe,
  setUserBlockMe,
  iBlockUser,
  setIBlockUser,
  follow,
  setFollow,
  followAfterMe,
  setFollowAfterMe,
  userFollow,
  setModalShowPhoto,
  setModalFollowers,
  setModalFollowing,
  setModalAlredayAcceptRequest,
  setModalRequestFollowersExpired,
  setModalUserDeleted,
  setModalReload,
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  totalPosts,
  userPublic,
  setUserPublic,
  statusFollow,
  setStatusFollow,
}) => {
  const [followRequest, setFollowRequest] = useState(false);
  const [followAfterMeRequest, setFollowAfterMeRequest] = useState(false);
  const [followMatch, setFollowMatch] = useState(false);

  useEffect(() => {
    if (userStore.isLogin && !iBlockUser && !userBlockMe) {
      if (
        userStore.user.arrFollowing.length > 0 &&
        userFollow.arrFollowers.length > 0
      ) {
        if (
          userStore.user.arrFollowing.length >= userFollow.arrFollowers.length
        ) {
          for (let x = 0; x < userFollow.arrFollowers.length; x++) {
            if (userFollow.arrFollowers[x] === userStore.user._id) {
              setFollow(true);
              break;
            }
          }
        } else {
          for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
            if (userStore.user.arrFollowing[x] === user._id) {
              setFollow(true);
              break;
            }
          }
        }
      }

      if (!follow && !userPublic) {
        if (
          userStore.user.arrFollowingRequest.length > 0 &&
          userFollow.arrFollowersRequest.length > 0
        ) {
          if (
            userStore.user.arrFollowingRequest.length >=
            userFollow.arrFollowersRequest.length
          ) {
            for (let x = 0; x < userFollow.arrFollowersRequest.length; x++) {
              if (userFollow.arrFollowersRequest[x] === userStore.user._id) {
                setFollowRequest(true);
                break;
              }
            }
          } else {
            for (
              let x = 0;
              x < userStore.user.arrFollowingRequest.length;
              x++
            ) {
              if (userStore.user.arrFollowingRequest[x] === user._id) {
                setFollowRequest(true);
                break;
              }
            }
          }
        }
      }

      if (
        userStore.user.arrFollowers.length > 0 &&
        userFollow.arrFollowing.length > 0
      ) {
        if (
          userStore.user.arrFollowers.length >= userFollow.arrFollowing.length
        ) {
          for (let x = 0; x < userFollow.arrFollowing.length; x++) {
            if (userFollow.arrFollowing[x] === userStore.user._id) {
              setFollowAfterMe(true);
              break;
            }
          }
        } else {
          for (let x = 0; x < userStore.user.arrFollowers.length; x++) {
            if (userStore.user.arrFollowers[x] === user._id) {
              setFollowAfterMe(true);
              break;
            }
          }
        }
      }

      if (!followAfterMe && !userStore.user.public) {
        if (
          userStore.user.arrFollowersRequest.length > 0 &&
          userFollow.arrFollowingRequest.length > 0
        ) {
          if (
            userStore.user.arrFollowersRequest.length >=
            userFollow.arrFollowingRequest.length
          ) {
            for (let x = 0; x < userFollow.arrFollowingRequest.length; x++) {
              if (userFollow.arrFollowingRequest[x] === userStore.user._id) {
                setFollowAfterMeRequest(true);
                break;
              }
            }
          } else {
            for (
              let x = 0;
              x < userStore.user.arrFollowersRequest.length;
              x++
            ) {
              if (userStore.user.arrFollowersRequest[x] === user._id) {
                setFollowAfterMeRequest(true);
                break;
              }
            }
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    if (statusFollow) {

      let flag = false
      for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
        if (userStore.user.arrFollowing[x] === user._id) {
          flag = true
          setFollow(true);
          break;
        }
      }

      if(!flag){
        setFollow(false);
      }

      if (!follow) {
        for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
          if (userStore.user.arrFollowingRequest[x] === user._id) {
            setFollowRequest(true);
            userPublic(false);
            break;
          }
        }
      }

      if (!follow && !followRequest) {
        for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
          if (userStore.user.arrMyBlock[x] === user._id) {
            setIBlockUser(true);
            break;
          }
        }

        for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
          if (userStore.user.arrBlockMe[x] === user._id) {
            setUserBlockMe(true);
            break;
          }
        }
      }

      setStatusFollow(false);
    }
  }, [statusFollow]);



  useEffect(() => {
    if (follow && followAfterMe) {
      setFollowMatch(true);
    } else {
      setFollowMatch(false);
    }
  }, [follow, followAfterMe]);

  return (
    <>
      {followAfterMeRequest ? (
        <Paper
          className="userProfileCardRequest"
          sx={{
            p: 1.3,
            paddingLeft: 3,
            margin: "auto",
            mt: "25px",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <h6 className="d-inline userProfileTextRequest">
            <b> {user.userName} </b> - want to follow after you!
          </h6>

          <FollowRequestButtons
            user={user}
            setModalUserDeleted={setModalUserDeleted}
            follow={follow}
            setFollow={setFollow}
            setIBlockUser={setIBlockUser}
            setFollowAfterMe={setFollowAfterMe}
            setUserBlockMe={setUserBlockMe}
            countFollowing={countFollowing}
            setCountFollowing={setCountFollowing}
            countFollowers={countFollowers}
            setCountFollowers={setCountFollowers}
            setFollowAfterMeRequest={setFollowAfterMeRequest}
            setModalRequestFollowersExpired={setModalRequestFollowersExpired}
            setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
          />
        </Paper>
      ) : null}

      <Paper
        className="userProfileCard"
        sx={{
          p: 2,
          margin: "auto",
          mt: "30px",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <p className="userProfileUserName">
              <b>{user.userName}</b>

              <FollowButtons
                user={user}
                followMatch={followMatch}
                follow={follow}
                setFollow={setFollow}
                followRequest={followRequest}
                setFollowRequest={setFollowRequest}
                userBlockMe={userBlockMe}
                setUserBlockMe={setUserBlockMe}
                iBlockUser={iBlockUser}
                setIBlockUser={setIBlockUser}
                countFollowers={countFollowers}
                setCountFollowers={setCountFollowers}
                setModalUserDeleted={setModalUserDeleted}
                setUserPublic={setUserPublic}
              />

              <IconButton
                sx={{
                  ml: "7.5px",
                  color: "black",
                  width: "33px",
                  height: "33px",
                  mt: "2px",
                }}
                disabled={true}
                // disabled={userBlockMe || !userStore.isLogin || iBlockUser}
              >
                <LocalPostOfficeOutlinedIcon
                  sx={{ fontSize: "24px", mt: "-3px" }}
                />
              </IconButton>
              <IconButton
                sx={{
                  ml: "7.5px",
                  color: "black",
                  width: "33px",
                  height: "33px",
                  mt: "2px",
                }}
                disabled={true}
                // disabled={userBlockMe || iBlockUser}
              >
                <InfoOutlinedIcon sx={{ fontSize: "24px", mt: "-3px" }} />
              </IconButton>
            </p>
          </Grid>
          <Grid item xs={2}>
            <IconOptionsButton
              user={user}
              iBlockUser={iBlockUser}
              setIBlockUser={setIBlockUser}
              follow={follow}
              setFollow={setFollow}
              setFollowRequest={setFollowRequest}
              setModalReload={setModalReload}
              countFollowers={countFollowers}
              setCountFollowers={setCountFollowers}
              setFollowAfterMe={setFollowAfterMe}
              setFollowAfterMeRequest={setFollowAfterMeRequest}
              countFollowing={countFollowing}
              setCountFollowing={setCountFollowing}
              setModalUserDeleted={setModalUserDeleted}
              followAfterMe={followAfterMe}
            />
          </Grid>
          <Grid item sx={{ marginTop: "-21.5px" }}>
            <ImageButton
              user={user}
              setModalShowPhoto={setModalShowPhoto}
              userBlockMe={userBlockMe}
              iBlockUser={iBlockUser}
            />
          </Grid>
          <Grid item xs sm container>
            <Grid item xs container spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <p className="userProfileFullName">
                    <b>{user.fullName}</b>
                  </p>
                </Typography>
                {user.bio !== "Wirte something" ? (
                  <Typography variant="body2" gutterBottom component="div">
                    <p className="userProfileBio">{user.bio} </p>
                  </Typography>
                ) : (
                  <div className="userProfileDivEmptyBio"></div>
                )}

                <hr className="userProfileHrUser" />

                <div className="userProfileDivBoxs">
                  <PostButton
                    userBlockMe={userBlockMe}
                    iBlockUser={iBlockUser}
                    follow={follow}
                    user={user}
                    totalPosts={totalPosts}
                  />

                  <FollowersButton
                    user={user}
                    countFollowers={countFollowers}
                    setModalFollowers={setModalFollowers}
                    follow={follow}
                    userBlockMe={userBlockMe}
                    iBlockUser={iBlockUser}
                  />

                  <FollowingButton
                    user={user}
                    countFollowing={countFollowing}
                    setModalFollowing={setModalFollowing}
                    userBlockMe={userBlockMe}
                    iBlockUser={iBlockUser}
                    follow={follow}
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

export default CardUserProfile;
