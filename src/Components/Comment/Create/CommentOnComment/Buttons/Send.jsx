import React, { useCallback, useState } from "react";
import { createComment } from "../../../../../Services/CommentServices/CommentPostService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { commentStore } from "../../../../../Store/Comment/CommentStore";
import { postStore } from "../../../../../Store/Post/PostSotre";

const Send = ({
  commentItem,
  description,
  userTaged,
  commentOnCommentArr,
  setCommentOnCommentArr,
  setOpenInputOnComment,
  countComments,
  setCountComments,
  countComments2,
  setCountComments2,
  setSlice,
  setModalCommentDeletedInCreate,
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

      const postId = commentItem.postId;
      const commentId = commentItem._id;

      const requestBody = {
        arrTag: userTaged,
        description: description,
        shortDescription: shortDescription,
      };

      await createComment(postId, commentId, requestBody).then((res) => {
        const arrComments = res.data.allComments;
        arrComments.push(res.data.newComment);
        setCommentOnCommentArr(arrComments);
        commentItem.arrComments = arrComments;
        setSlice(arrComments.length);
      });
      setOpenInputOnComment(false);
      setCountComments(countComments + 1);
      setCountComments2(countComments2 * 1 + 1);
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentItem.postId;
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment main deleted") {
          commentStore.commentMainDeletedId = commentItem._id;
          commentStore.comment = {
            arrTag: userTaged,
            description: description,
          };
          setModalCommentDeletedInCreate(true);
        }
      }
    }
  }, [
    commentOnCommentArr,
    countComments,
    countComments2,
    description,
    userTaged,
  ]);

  return (
    <div className="homePageCommentCreateDivButton2">
      {!isLoadingSend ? (
        <Button
          variant={description === "" ? "outlined" : "contained"}
          endIcon={<SendIcon sx={{ fontSize: "12px" }} />}
          className="homePageCommentCreateButton2"
          sx={{
            textTransform: "unset",
          }}
          onClick={() => send()}
          disabled={description === ""}
        >
          <h6 className="homePageCommentCreateButtonText2">Send</h6>
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingSend}
          variant="outlined"
          disabled
          className="homePageCommentCreateButton2"
        ></LoadingButton>
      )}
    </div>
  );
};

export default Send;
