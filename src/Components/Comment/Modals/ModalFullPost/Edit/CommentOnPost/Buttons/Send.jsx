import React, { useCallback, useState } from "react";
import { postStore } from "../../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../../Store/Comment/CommentStore";
import { editComment } from "../../../../../../../Services/CommentServices/CommentEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Send = ({
  commentItem,
  userTaged,
  descriptionUpdate,
  setEditComment,
  setDescription,
  setShortDescription,
  setModalPostDeleted,
  setModalCommentDeleted,
}) => {
  const [isLoadingSend, setIsLoadingSend] = useState(false);

  const send = useCallback(async () => {
    try {
      setIsLoadingSend(true);

      let checkDesciption = descriptionUpdate.split(/\r?\n/);
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
        descriptionUpdate = "";
        for (let x = 0; x < checkDesciption.length; x++) {
          if (x !== checkDesciption.length - 1) {
            descriptionUpdate += checkDesciption[x] + "\n";
          } else {
            descriptionUpdate += checkDesciption[x];
          }
        }
      }

      let strRow = descriptionUpdate.split(/\r?\n/);
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
      const commentMainId = undefined;

      const requestBody = {
        arrTag: userTaged,
        description: descriptionUpdate,
        shortDescription: shortDescription,
      };

      await editComment(postId, commentId, commentMainId, requestBody);

      setDescription(descriptionUpdate);
      setShortDescription(shortDescription);
      setEditComment(false);
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentItem.postId;
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment deleted") {
          commentStore.commentMainDeletedId = commentItem._id;
          setModalCommentDeleted(true);
        }
      }
    }
  }, [descriptionUpdate, userTaged]);

  return (
    <div className="modalFullPostCommentEditDivButton1">
      {!isLoadingSend ? (
        <Button
          variant={descriptionUpdate === "" ? "outlined" : "contained"}
          endIcon={<SendIcon sx={{ fontSize: "12px" }} />}
          className="modalFullPostCommentEditButton1"
          sx={{
            textTransform: "unset",
          }}
          onClick={() => send()}
          disabled={descriptionUpdate === ""}
        >
          <h6 className="modalFullPostCommentEditButtonText1">Send</h6>
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingSend}
          variant="outlined"
          disabled
          className="modalFullPostCommentEditButton1"
        ></LoadingButton>
      )}
    </div>
  );
};

export default Send;
