import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Date = ({
  date,
  setDate,
  birthDay,
  setBirthDay,
  validDate,
  setValidDate,
  dateFocus,
  setDateFocus,
  young,
  setYoung,
  impossibleAge,
  setImpossibleAge,
}) => {
  useEffect(() => {
    if (date !== null) {
      if (date.$y > 0) {
        if (date.$y > 2015 && date.$y < 2023) {
          setYoung(true);
        } else if (date.$y >= 2023) {
          setImpossibleAge(true);
        } else {
          setYoung(false);
          setImpossibleAge(false);
          setValidDate(true);
        }
      }

      setBirthDay(date.$D + "/" + date.$M + 1 + "/" + date.$y);
    }
  }, [date]);

  useEffect(() => {
    if (date !== null && birthDay.length < 8) {
      setValidDate(false);
    }
  },[date]);


  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="loginSystemInput mt-4"
          label="Birthday"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              size="small"
              {...params}
              helperText={
                young
                  ? "You young"
                  : impossibleAge
                  ? "Are you sure?"
                  : "Your Birthday"
              }
              onChange={(e) => setDate(e.target.value)}
              error={
                young ||
                impossibleAge ||
                (!dateFocus && date === "") ||
                (!validDate && date !== "")
              }
              value={date || ""}
              onFocus={() => setDateFocus(true)}
              onBlur={() => setDateFocus(false)}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Date;
