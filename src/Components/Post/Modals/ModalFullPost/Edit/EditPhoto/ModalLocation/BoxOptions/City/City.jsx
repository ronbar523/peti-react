import React from "react";
import { Card, CardHeader } from "@mui/material";

const City = ({ item, setModalLocation }) => {
  const selectCity = () => {
    setModalLocation(false);
  };

  return (
    <button onClick={() => selectCity()}  className="modalFullPostModalLocationPhotoPostButton">
      <Card>
        <CardHeader
          title={<h6 className="modalFullPostModalLocationPhotoPostName">{item}</h6>}
        />
      </Card>
    </button>
  );
};

export default City;
