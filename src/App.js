import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard/CountryCard";
import Loading from "./components/Loading/Loading";

const countryList = require("./countryNames.json");

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const fetchCountryData = async () => {
    try {
      setIsLoading(true);
      const url = process.env.REACT_APP_API_URL + countryName;
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        const fetchError = await response.json();
        throw new Error(fetchError.error);
      }
      const result = await response.json();
      console.log(result);
      setCountryData(result);

      setCountryName("");
      setIsError(false);
      setError(null);
    } catch (error) {
      console.log(error);
      setCountryData(null);
      setCountryName("");
      setError(error.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const inputHandler = (event) => {
    const value = event.target.value.toLowerCase();
    setCountryName(value);
    const filteredList = countryList.filter((country) =>
      country.toLowerCase().includes(value)
    );
    const sugList = filteredList.slice(0, 20);
    if (value.length !== 0) setSuggestions(sugList);
    else setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setCountryName(suggestion);
    setSuggestions([]);
  };

  useEffect(() => {
    if (submitPressed && countryName.length > 0) fetchCountryData();
    setSubmitPressed(false);
  }, [countryName, submitPressed]);

  return (
    <div className="App">
      <div className="country-search-container">
        <h1>Country Explorer</h1>
        <div className="search-outer-container">
          <div className="search-input-container">
            <input
              placeholder="country name"
              name="Country"
              value={countryName}
              onChange={inputHandler}
            />

            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="btn-container">
            <button
              name="Submit"
              // className="btn-container"
              disabled={countryName.length === 0}
              onClick={() => {
                setSubmitPressed(true);
              }}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="loading-container">
          <Loading />
        </div>
      )}
      {countryData && !isLoading && (
        <div>
          <CountryCard props={countryData} />
        </div>
      )}

      {isError && !isLoading && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
