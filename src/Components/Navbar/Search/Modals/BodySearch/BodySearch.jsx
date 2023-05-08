import React from "react";
import { Link } from "react-router-dom";
import { Avatar, CardHeader } from "@mui/material";

const BodySearch = ({ item }) => {
  return (
    <Link
      onClick={() => window.location.replace(`/user_profile/${item.userName}`)}
      className="text-decoration-none text-dark"
    >
      <div className="modal-content">
          <CardHeader
            avatar={<Avatar src={item.photo} aria-label="recipe" />}
            title={item.fullName}
            subheader={"(" + item.userName + ")"}
            />
      </div>
    </Link>
  );
};

export default BodySearch;
