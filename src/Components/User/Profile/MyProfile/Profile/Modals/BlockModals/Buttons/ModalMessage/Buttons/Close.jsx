import React from 'react'

const Close = ({ setModalUnBlockAll, isLoadingUnBlockAll, inputRef }) => {

  const closeModal = () => {
    inputRef.current.focus()
    setModalUnBlockAll(false)
  }
  return (
    <>
      <button
        className="btn-close"
        onClick={() => closeModal()}
        disabled={isLoadingUnBlockAll}
      />
    </>
  );
};

export default Close;
