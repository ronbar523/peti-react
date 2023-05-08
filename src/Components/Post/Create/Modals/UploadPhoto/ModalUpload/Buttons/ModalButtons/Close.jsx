import React from "react";

const Close = ({ setModalDeletePost }) => {
  return (
    <>
      <button className="btn-close" onClick={() => setModalDeletePost(true)} />
    </>
  );
};

export default Close;
