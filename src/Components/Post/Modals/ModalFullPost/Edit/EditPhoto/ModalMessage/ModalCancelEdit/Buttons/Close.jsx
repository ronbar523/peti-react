import React from "react";

const Close = ({ setModalCancelEditPost }) => {
  return (
    <>
      <button className="btn-close" onClick={() => setModalCancelEditPost(false)} />
    </>
  );
};

export default Close;
