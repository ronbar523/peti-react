import React from 'react'
import { Card, CardHeader } from '@mui/material';

const Cities = ({ item, setLocation, countryText, setModalLocation }) => {

  const selectCity = () => {
    const country = countryText.charAt(0).toUpperCase() + countryText.slice(1) 
    setLocation(country + " - " + item);
    setModalLocation(false)
  };

  return (
    <button onClick={() => selectCity()}  className="modalLocationPhotoPostButton">
      <Card>
        <CardHeader
          title={<h6 className="modalLocationPhotoPostName">{item}</h6>}
        />
      </Card>
    </button>
  );
};

export default Cities;
