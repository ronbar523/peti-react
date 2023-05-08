import React, { useEffect, useRef, useState } from "react";
import "../../../../../../../Css/Post/Modals/ModalFullPost/Edit/ModalEditPhotoPost/ModalFullPostModalLocationPhotoPost.css";

import axios from "axios";
import Close from "./Buttons/Close";
import Search from "./Inputs/Search";
import BoxOptions from "./BoxOptions/BoxOptions";
import Delete from "./Buttons/Delete";
import Done from "./Buttons/Done";

const ModalLocation = ({ location, setLocation, setModalLocation }) => {


  const inputRef = useRef();
  const [text, setText] = useState(location);

  const [isLoading, setIsLoading] = useState(true);
  const [allData, setAllData] = useState([]);

  const [locationCountry, setLocationCountry] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [countryText, setCountryText] = useState("");

  const [citiesOfMyCountryLocation, setCitiesOfMyCountryLocation] = useState(
    []
  );
  const [myCityLocation, setMyCityLocation] = useState([]);

  const [showCities, setShowCities] = useState([]);
  const [citiesArr, setCitiesArr] = useState([]);
  
  const [showCountries, setShowCountries] = useState([]);

  const [disabled, setDisabled] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://countriesnow.space/api/v0.1/countries")
          .then((res) => {
            setAllData(res.data.data);
            if (res.data.data.length > 0) {
              let allSplit = location.split("-");
              let countrySplit = allSplit[0]
                .substring(allSplit[0].length - 1, 0)
                .toLowerCase();
              let citySplit = allSplit[1].substring(1).toLowerCase();

              setLocationCountry(countrySplit);
              setLocationCity(citySplit);

              //Find my country by location
              const findMyLocation = async () => {
                let arrCountry = [];
                arrCountry = res.data.data.filter((countries) =>
                  countries.country.toLowerCase().startsWith(countrySplit)
                );

                if (arrCountry.length > 0) {
                  // all cities in my country
                  let cities = arrCountry[0].cities;
                  setCitiesOfMyCountryLocation(cities);
                  // find my city by location
                  if (citySplit !== "") {
                    let city = await cities.filter((cities) =>
                      cities.toLowerCase().startsWith(citySplit)
                    );
                    setMyCityLocation(city);
                  }
                }
                setIsLoading(false);
              };

              findMyLocation();
            }
          });
      } catch {
        setModalLocation(false)
      }
    };
    inputRef.current.focus();
    fetchData().catch();
  }, []);

  return (
    <>
      <div
        className="modal show fade d-block modalFullPostModalLocationPhotoPostLocation"
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Upload Photo</h5>
              <Close setModalLocation={setModalLocation} />
            </div>

            <Search
              allData={allData}
              text={text}
              setText={setText}
              citiesOfMyCountryLocation={citiesOfMyCountryLocation}
              setShowCountries={setShowCountries}
              setMyCityLocation={setMyCityLocation}
              setShowCities={setShowCities}
              setCountryText={setCountryText}
              locationCountry={locationCountry}
              locationCity={locationCity}
              citiesArr={citiesArr}
              setDisabled={setDisabled}
              inputRef={inputRef}
            />

            <hr />

            <BoxOptions
              showCities={showCities}
              setShowCities={setShowCities}
              setCitiesOfMyCountryLocation={setCitiesOfMyCountryLocation}
              showCountries={showCountries}
              setShowCountries={setShowCountries}
              setLocationCountry={setLocationCountry}
              setText={setText}
              myCityLocation={myCityLocation}
              setModalLocation={setModalLocation}
              countryText={countryText}
              setLocation={setLocation}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setCountryText={setCountryText}
              setCitiesArr={setCitiesArr}
              inputRef={inputRef}
            />

            <hr className="modalFullPostModalLocationPhotoPostHr" />
            <div>
              <Delete
                setLocation={setLocation}
                setModalLocation={setModalLocation}
              />
              <Done
                setModalLocation={setModalLocation}
                setLocation={setLocation}
                text={text}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLocation;
