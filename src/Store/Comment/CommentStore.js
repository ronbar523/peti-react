class CommentStore {
  comment = {};
  commentLikes = {}
  postId = ""
  mainCommentId = ""
  commentArr = []
  commentOnCommentArr = []
  deleted = false
  like = false
  commentMainDeletedId = ""
  commentDeletedId = ""
  moreOne = false
  continue = false
  countLikes = Number
}

export const commentStore = new CommentStore();
