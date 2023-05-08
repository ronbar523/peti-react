import React from "react";

const Close = ({ setModalDescription }) => {
  return (
    <>
      <button
        className="btn-close"
        onClick={() => setModalDescription(false)}
      />
    </>
  );
};

export default Close;
