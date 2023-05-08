import React from "react";
import { Link } from "react-router-dom";

const ShowMore = ({ text }) => {
  return (
    <Link
      className="h5 ms-3 mt-1 mb-2"
      onClick={() => window.location.replace(`/search_users/?filter=${text}`)}
    >
      {" "}
      Show More{" "}
    </Link>
  );
};

export default ShowMore;
