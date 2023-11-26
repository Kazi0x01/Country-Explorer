import React, { useState } from "react";
import "./CountryCard.css";

import Capital from "../../assets/capital.png";
import Continent from "../../assets/continent.png";
import Border from "../../assets/border-nbg.png";
import Currency from "../../assets/currency.png";
import Population from "../../assets/population.png";
import Subregion from "../../assets/sub-region.png";
import Language from "../../assets/trans-nbg.png";
import Location from "../../assets/geoloc.png";

import TimeDisplay from "../TimeDisplay/TimeDisplay";
import UnMember from "../UnMember/UnMember";
import Independent from "../Independent/Independent";
import FlagAndEmblem from "../FlagAndEmblem/FlagAndEmblem";
import StatsCard from "../StatsCard/StatsCard";

import Maps from "../Maps/Maps";
import { flushSync } from "react-dom";

const CountryCard = ({ props }) => {
  return (
    <div>
      <div>
        <h2>
          {props.name}, {props.country_code}
        </h2>
      </div>
      <TimeDisplay timezone={props.timezone[0]} />
      <FlagAndEmblem flagUrl={props.flags} CoaUrl={props.coatOfArms} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <UnMember isMember={props.is_unMember} />
        <Independent isIndependent={props.is_independent} />
      </div>

      <div className="stats-container">
        <div
          style={{
            height: "auto",
          }}
        >
          <img
            src={Currency}
            style={{
              height: 150,
              width: "min-content",
            }}
          />
          {Object.keys(props.currencies).map((currencyCode) => {
            const currencyDetails = props.currencies[currencyCode];

            return (
              <div key={currencyCode}>
                <h3>Currency:</h3>
                <h3>
                  {currencyDetails.name} ({currencyCode}) (
                  {currencyDetails.symbol})
                </h3>
              </div>
            );
          })}
        </div>

        <StatsCard imgSrc={Capital} field="Capital" value={props.capital} />
        <StatsCard imgSrc={Continent} field="Continent" value={props.region} />
        <StatsCard
          imgSrc={Subregion}
          field="Sub-Region"
          value={props.sub_region}
        />
        <StatsCard
          imgSrc={Population}
          field="Population"
          value={props.population}
        />
        <StatsCard
          imgSrc={Language}
          field="Languages"
          value={props.languages.join(", ")}
        />
        {props.borders.length > 0 && (
          <StatsCard
            imgSrc={Border}
            field="borders"
            value={props.borders.join(", ")}
          />
        )}
        <StatsCard
          imgSrc={Location}
          field="Geo-Location"
          value={`Lat: ${props.geo_loc.lat}; Lng: ${props.geo_loc.lng}`}
        />
      </div>

      <div className="map-container">
        <Maps lat={props.geo_loc.lat} lng={props.geo_loc.lng} />
      </div>
    </div>
  );
};

export default CountryCard;
