import React from "react";

const Close = ({ setModalCancelEditPost }) => {


  return (
    <>
      <button className="btn-close" onClick={() => setModalCancelEditPost(true)} />
    </>
  );
};

export default Close;
