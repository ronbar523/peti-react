import React from "react";

const Close = ({ setModalLocation }) => {
  return (
    <>
      <button
        className="btn-close"
        onClick={() => setModalLocation(false)}
      />
    </>
  );
};

export default Close;
