import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./Css/App.css";

import "./Css/Navbar/Navbar.css";

import "./Css/User/LoginSystem/LoginSystem.css";
import "./Css/User/LoginSystem/Modal/ModalBlock.css";
import "./Css/User/LoginSystem/Modal/ModalMessage.css";

import "./Css/User/Profile/MyProfile/MyProfile.css";
import "./Css/User/Profile/MyProfile/Modals/Edit/ModalEdit.css";
import "./Css/User/Profile/MyProfile/Modals/Delete/ModalDelete.css";
import "./Css/User/Profile/MyProfile/Modals/Get/Follow/Following/ModalMyFollowing.css";
import "./Css/User/Profile/MyProfile/Modals/Get/Follow/Followers/ModalMyFollowers.css";
import "./Css/User/Profile/MyProfile/Modals/Get/Follow/MyRequest/ModalMyRequestFollowers.css";
import "./Css/User/Profile/MyProfile/Modals/Get/Follow/MyRequest/ModalMessage.css";
import "./Css/User/Profile/MyProfile/Modals/Get/Block/ModalMyBlockUsers.css";
import "./Css/User/Profile/MyProfile/Modals/Get/Message/ModalMessage.css";

import "./Css/User/Profile/UserProfile/UserProfile.css";

import "./Css/User/Profile/UserProfile/Modal/Follow/ModalFollowing.css";
import "./Css/User/Profile/UserProfile/Modal/Follow/ModalFollowers.css";
import "./Css/User/Profile/UserProfile/Modal/ModalShowPhoto.css";
import "./Css/User/Profile/UserProfile/Modal/Delete/ModalUserDeleted.css";
import "./Css/User/Profile/UserProfile/Modal/Message/ModalMessage.css";

import "./Css/User/Search/Search.css";

import "./Css/Post/Create/CardCreate/CardCreatePost.css";

import Navbar from "./Components/Navbar/Nabvar";
import Login from "./Pages/User/LoginSystem/Login";
import Logout from "./Pages/User/LoginSystem/Logout";
import MyProfile from "./Pages/User/Profile/MyProfile";
import SearchUsers from "./Pages/User/Search/SearchUsers";

import { findUserById } from "./Services/UserServices/UserGetService";
import UserProfile from "./Pages/User/Profile/UserProfile";

import HomePage from "./Pages/HomePage/HomePage";

const Register = React.lazy(() => import("./Pages/User/LoginSystem/Register"));
const ForgetPassword = React.lazy(() =>
  import("./Pages/User/LoginSystem/ForgetPassword")
);
const NewPassword = React.lazy(() =>
  import("./Pages/User/LoginSystem/NewPassword")
);
const Verify = React.lazy(() => import("./Pages/User/LoginSystem/Verify"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalEditProfilePhoto, setModalEditProfilePhoto] = useState(false);
  const [coverNavbar, setCoverNavbar] = useState(false);
  const [discoverSearchInput, setDiscoverSearchInput] = useState(false);
  const [modalSearchUsers, setModalSearchUsers] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await findUserById();
        setIsLoading(false);
      } catch {
        window.location.reload();
      }
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const urlWordsArr = url.split("/");
    const word = urlWordsArr[3].toLowerCase();
    if (word === "login" || word === "register" || word === "forget_password") {
      setCoverNavbar(true);
    }
  }, []);

  const closeModalSearchUsers = () => {
    setText("");
    setModalSearchUsers(false);
    setDiscoverSearchInput(false);
  };

  const [modalAllComments, setModalAllComments] = useState(false);

  return (
    <>
      {!isLoading ? (
        <>
          {!coverNavbar && !modalAllComments ? (
            <header>
              <Navbar
                modalEditProfilePhoto={modalEditProfilePhoto}
                setModalSearchUsers={setModalSearchUsers}
                modalSearchUsers={modalSearchUsers}
                text={text}
                setText={setText}
                discoverSearchInput={discoverSearchInput}
                setDiscoverSearchInput={setDiscoverSearchInput}
              />
            </header>
          ) : null}
          <main
            onClick={() => closeModalSearchUsers()}
            className={modalSearchUsers ? "opacity-modal" : ""}
          >
            <Suspense fallback={<div> loading </div>}>
              <ToastContainer />
              <Routes>
                {/* Login System */}

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/forget_password" element={<ForgetPassword />} />
                <Route path="/new_password" element={<NewPassword />} />
                <Route path="/logout" element={<Logout />} />
                <Route
                  path="/my_profile"
                  element={
                    <MyProfile
                      modalEditProfilePhoto={modalEditProfilePhoto}
                      setModalEditProfilePhoto={setModalEditProfilePhoto}
                      modalAllComments={modalAllComments}
                      setModalAllComments={setModalAllComments}
                    />
                  }
                />
                <Route
                  path="/user_profile/:userName"
                  element={
                    <UserProfile
                      modalAllComments={modalAllComments}
                      setModalAllComments={setModalAllComments}
                    />
                  }
                />
                <Route path="/search_users" element={<SearchUsers />} />

                <Route
                  path="/"
                  element={
                    <HomePage
                      modalAllComments={modalAllComments}
                      setModalAllComments={setModalAllComments}
                    />
                  }
                />
              </Routes>
            </Suspense>
          </main>
        </>
      ) : null}
    </>
  );
}

export default App;
