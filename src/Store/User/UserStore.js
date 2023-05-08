class UserStore {
  
  isLogin = false;

  user = {  
    arrBlockMe: [], 
    arrFollowers: [],
    arrFollowing: [],
    arrFollowersRequest: [],
    arrFollowingRequest: [],
    arrMyBlock: [],
    arrMyUserLike: [],
    bio: "",
    countMylike: 0,
    countPost:  0,
    dateOfBirth: "",
    email: "",
    firstName: "",
    fullName: "",
    gender: "",
    isAdmin: false,
    lastName: "",
    myPostPhotoLength: 0,
    myPostVideoLength: 0,
    myPostTextLength: 0,
    phone: "",
    photo: "",
    public: false,
    userName: "",
    verify: false,
    _id: "",
  }

}

export const userStore = new UserStore();