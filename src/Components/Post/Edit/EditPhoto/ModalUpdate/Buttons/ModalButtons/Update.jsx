import React, { useCallback, useState } from "react";
import { postStore } from "../../../../../../../Store/Post/PostSotre";
import { editPost } from "../../../../../../../Services/PostServices/PostEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Update = ({
  description,
  category,
  location,
  userTaged,
  setModalEditPhotoPost,
  postArr,
  setModalPostDeleted
}) => {
  const [isLoadingUpdate, setIsLodingUpdate] = useState(false);

  const updateFunction = useCallback(async () => {
    try {
      setIsLodingUpdate(true);

      const postId = postStore.post._id;
      const arrTag = userTaged.map(({ _id }) => _id);

      let shortDescription = "";

      if (description !== "") {
        // for delete emptryRow
        let checkDesciption = description.split(/\r?\n/);
        let flag = false;

        let newCheck = checkDesciption;

        for (let x = checkDesciption.length - 1; x >= 0; x--) {
          if (checkDesciption[x].trimStart() === "") {
            newCheck.pop();
            flag = true;
          } else {
            break;
          }
        }
        checkDesciption = newCheck;

        if (flag) {
          description = "";
          for (let x = 0; x < checkDesciption.length; x++) {
            if (x !== checkDesciption.length - 1) {
              description += checkDesciption[x] + "\n";
            } else {
              description += checkDesciption[x];
            }
          }
        }

        let strRow = description.split(/\r?\n/);

        if (strRow.length > 2) {
          if (strRow[0].length < 50) {
            if (strRow[1].length < 50) {
              shortDescription = strRow[0] + "\n" + strRow[1];
            } else {
              let strSplit = strRow[1].split("");
              let str = "";
              for (let x = 0; x < 50; x++) {
                str += strSplit[x];
              }
              shortDescription = strRow[0] + "\n" + str;
            }
          } else {
            if (strRow[0].length > 100) {
              let strSplit = strRow[0].split("");
              let str = "";
              for (let x = 0; x < 100; x++) {
                str += strSplit[x];
              }
              shortDescription = str;
            } else {
              shortDescription = strRow[0] + "\n" + strRow[1];
            }
          }
        } else {
          if (strRow[0].length < 50) {
            if (strRow[1] !== undefined) {
              if (strRow[1].length > 50) {
                let strSplit = strRow[1].split("");
                let str = "";
                for (let x = 0; x < 50; x++) {
                  str += strSplit[x];
                }
                shortDescription = strRow[0] + "\n" + str;
              } else {
                shortDescription = strRow[0] + "\n" + strRow[1];
              }
            } else {
              shortDescription = strRow[0];
            }
          } else {
            if (strRow[1] !== undefined) {
              if (strRow[1].length > 100) {
                let strSplit = strRow[1].split("");
                let str = "";
                for (let x = 0; x < 100; x++) {
                  str += strSplit[x];
                }
                shortDescription = strRow[0] + "\n" + str;
              } else {
                shortDescription = strRow[0] + "\n" + strRow[1];
              }
            } else {
              if (strRow[0].length > 100) {
                let strSplit = strRow[0].split("");
                let str = "";
                for (let x = 0; x < 100; x++) {
                  str += strSplit[x];
                }
                shortDescription = str;
              } else {
                shortDescription = strRow[0];
              }
            }
          }
        }
      }

      const requestBody = {
        description: description,
        shortDescription: shortDescription,
        category: category,
        location: location,
        arrTag: arrTag,
        lastUpdate: Date.now()
      };

      await editPost(postId, requestBody).then((res) => {
        let post = res.data.postUpdate;
        post.userNameTags = userTaged;

        for (let x = 0; x < postArr.length; x++) {
          if (postArr[x] !== null) {
            if (postArr[x]._id === post._id) {
              postArr[x] = post;
              break;
            }
          }
        }
      });
      setModalEditPhotoPost(false);
    } catch(err) {
      if (err.response.status === 410) {
        setModalEditPhotoPost(false);
        setModalPostDeleted(true)
        postStore.postDeletedId = postStore.post._id;
      }
      setIsLodingUpdate(false);
    }
  }, [description, category, location, userTaged, postArr]);
  return (
    <>
      {!isLoadingUpdate ? (
        <Button
          variant="outlined"
          sx={{
            marginRight: "15px",
            width: 75,
            height: 35,
            marginBottom: "15px",
            textTransform: "unset",
            float: "right",
          }}
          onClick={() => updateFunction()}
        >
          Update
        </Button>
      ) : (
        <LoadingButton
          variant="outlined"
          sx={{
            marginRight: "15px",
            width: 75,
            height: 36,
            marginBottom: "15px",
            float: "right",
          }}
          loading={isLoadingUpdate}
          disabled
        ></LoadingButton>
      )}
    </>
  );
};

export default Update;
