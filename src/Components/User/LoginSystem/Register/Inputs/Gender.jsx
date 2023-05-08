import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Gender = ({
  gender,
  setGender,
  validGender,
  setValidGender,
  genderFocus,
  setGenderFocus,
}) => {

  const genderOptions = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Women',
      label: 'Women',
    },
    {
      value: 'Free Spirit',
      label: 'Free Spirit',
    },
  ];

  useEffect(() => {
    let result = false;
    if (gender.length > 0) {
      result = true;
    }
    setValidGender(result);
  }, [gender]);


  return (
    <div className="mt-2">   
      <div>
        <TextField         
          id="outlined-select-currency"         
          className="loginSystemInput mt-3"
          select
          size="small"
          label="Gender"
          helperText={!validGender && !genderFocus ? "Please Select Your Gender" : "Select Your Gender"} 
          value={gender || ""}
          onChange={(e) => setGender(e.target.value)}
          onFocus={() => setGenderFocus(true)}
          onBlur={() => setGenderFocus(false)}
          error={!validGender && !genderFocus}
        >
          
          {genderOptions.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              <div className="genderSelectOptions">
              {option.label}
            </div>
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Gender;
