import React from 'react'

const Upload = ({ inputRef, setPhoto, setIsLoadingPhoto }) => {

  const onFileChange = (e) => {
    setIsLoadingPhoto(true)
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <input
      className="modalChangePhotoInput"
      type="file"
      accept=".jpg, .jpeg, .png"
      onChange={(e) => onFileChange(e)}
      ref={inputRef}
    />
  );
};

export default Upload;
