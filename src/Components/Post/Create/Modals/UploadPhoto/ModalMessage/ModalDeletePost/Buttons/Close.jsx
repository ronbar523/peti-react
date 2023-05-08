import React from "react";

const Close = ({ setModalDeletePost }) => {
  return (
    <>
      <button className="btn-close" onClick={() => setModalDeletePost(false)} />
    </>
  );
};

export default Close;
