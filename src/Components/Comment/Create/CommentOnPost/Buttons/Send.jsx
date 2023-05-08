import React, { useCallback, useState } from "react";
import { postStore } from "../../../../../Store/Post/PostSotre"
import { createComment } from "../../../../../Services/CommentServices/CommentPostService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";


const Send = ({
  item,
  description,
  setDescription,
  arrTag,
  setShowBtnSend,
  commentsArr,
  setCommentsArr,
  countComments,
  setCountComments,
  setModalPostDeleted,
}) => {
  const [isLoadingSend, setIsLoadingSend] = useState(false);

  const send = useCallback(async () => {
    try {
      setIsLoadingSend(true);

      let checkDesciption = description.split(/\r?\n/);
      let flag = false;

      let shortDescription = "";
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

      const postId = item._id;
      const commentId = undefined;
      const requestBody = {
        description: description,
        shortDescription: shortDescription,
        arrTag: arrTag,
      };

      await createComment(postId, commentId, requestBody).then((res) => {
        setCommentsArr([res.data.newComment, ...commentsArr]);
      });
      setCountComments(countComments + 1);
      setDescription("");
      setShowBtnSend(false);
      setIsLoadingSend(false);
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = item._id;
          setModalPostDeleted(true);
        }
      }
    }
  }, [description, arrTag]);

  return (
    <>
      {!isLoadingSend ? (
        <Button
          variant="contained"
          endIcon={<SendIcon sx={{ fontSize: "12px" }} />}
          className={
            countComments > 0
              ? "homePageCommentCreateButtonWithComment1"
              : "homePageCommentCreateButtonWithoutComment1"
          }
          sx={{
            textTransform: "unset",
            mt: "-15px",
          }}
          onClick={() => send()}
        >
          Send
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingSend}
          variant="outlined"
          disabled
          className={
            countComments > 0
              ? "homePageCommentCreateButtonWithComment1"
              : "homePageCommentCreateButtonWithoutComment1"
          }
          sx={{
            mt: "-15px",
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Send;
