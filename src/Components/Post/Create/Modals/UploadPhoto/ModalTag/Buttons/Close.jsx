import React from "react";

const Close = ({ setModalTag }) => {
  return <button className="btn-close" onClick={() => setModalTag(false)} />;
};

export default Close;
