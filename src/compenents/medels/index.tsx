import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { windowWidthCheck } from "../../helpers/lib/window";
import { medels } from "../../types/types";
import "./style.css";

interface props {
  medels: medels;
}

const Medels = (props: props) => {
  const [showMedels, setShowMedels] = useState(windowWidthCheck());

  const clickHandler = () => {
    setShowMedels(showMedels ? false : true);
  };
  
  const accMedles = props.medels;

  return (
    <section className="medels contentWraper">
      <div className="medel">
        <h2>Medles</h2>
        <div
          style={{ display: showMedels ? "flex" : "none" }}
          className="medels"
        >
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/4f856cbc4a8d41d44167a05590e82251.png"
              alt="medalAvenger"
            />
            <h3>Blood For Blood: {accMedles.medalAvenger.basic.value? accMedles.medalAvenger.basic.displayValue : 0}</h3>
          </div>
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/be5d7d9679dade775943589ac5d50791.png"
              alt="medalPayback"
            />
            <h3>Best Served Cold: {accMedles.medalPayback.basic.value? accMedles.medalPayback.basic.displayValue: 0}</h3>
          </div>
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/icon_mdbab442edbc7e7ecd6a56f5ac1b1dd47.png"
              alt="medalStreak5x"
            />
            <h3>Ruthless: {accMedles.medalStreak5x.basic.value? accMedles.medalStreak5x.basic.displayValue : 0}</h3>
          </div>
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/icon_mec86a0f21dfca81ee7cd008803a6fc47.png"
              alt="medalQuickStrike"
            />
            <h3>Quick Strike: {accMedles.medalQuickStrike.basic.value ? accMedles.medalQuickStrike.basic.displayValue : 0}</h3>
          </div>
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/icon_m67b503f29d3f1a739f88f9ae8371c1ec.png"
              alt="medalStreak10x"
            />
            <h3>Unyielding: {accMedles.medalStreak10x.basic.value ? accMedles.medalStreak10x.basic.displayValue:0}</h3>
          </div>
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/e2240bfb6621ee8b7f0986cbadfbb112.png"
              alt="medalDefeatTitanBrace"
            />
            <h3>Barricade Breaker: {accMedles.medalDefeatTitanBrace.basic.value? accMedles.medalDefeatTitanBrace.basic.displayValue: 0}</h3>
          </div>
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/icon_mb96e1a8d0e9564b18d1c846bc1b07277.png"
              alt="medalDefeatHunterDodge"
            />
            <h3>Dodge This: {accMedles.medalDefeatHunterDodge.basic.value? accMedles.medalDefeatHunterDodge.basic.displayValue: 0}</h3>
          </div>
          <div className="medelsComponent">
            <img
              src="https://www.bungie.net/common/destiny2_content/icons/icon_m82bca046cefd86485ebffeed197fd57c.png"
              alt="medalDefeatWarlockSigil"
            />
            <h3>Rift Breaker: {accMedles.medalDefeatWarlockSigil.basic.value? accMedles.medalDefeatWarlockSigil.basic.displayValue: 0}</h3>
          </div>
        </div>
        <span className="showStats" onClick={clickHandler}>
          <h3>
            {showMedels ? (
              <FontAwesomeIcon icon="arrow-up" color="white" />
            ) : (
              <FontAwesomeIcon icon="arrow-down" color="white" />
            )}
          </h3>
        </span>
      </div>
    </section>
  );
};

export default Medels;
