import React from "react";

const Close = ({ setModalCategory }) => {
  return <button className="btn-close" onClick={() => setModalCategory(false)} />;
};

export default Close;
