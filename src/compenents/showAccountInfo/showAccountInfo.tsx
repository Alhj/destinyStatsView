import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import Loading from "../loading/loading";
import ShowAllTimeStats from "../showAllTimeStats/showAllTimeStats";
import { getAccountInfo, getAccountStats } from "../../helpers/getAccountInfo";
import { characters, errorInFetch } from "../../types/types";
import {
  genereateTempleteWeaponStats,
  genereateTempleteActivity
} from "../../helpers/genereateTemplete/generateAllStatsMocObject";
import "./showAccountInfo.css";

const url: string = "https://www.bungie.net";

const ShowAccountInfo = () => {
  const firstChar: characters = {
    emblemBackgroundPath: "",
    classType: 0,
    light: 0
  };

  const [isLoading, setIsLoading] = useState(false);
  const [accountCharacters, setAccountCharacters] = useState([firstChar]);
  const [allStats, setAllStats] = useState(genereateTempleteWeaponStats());
  const [activityStats, setActivityStats] = useState(genereateTempleteActivity());
  const [witchStats, setWitchStats] = useState(true);
  const [pvpBackgroundColor, setPvpBackgroundColor] = useState("white");
  const [pveBackgroundColor, setPveBackgroundColor] = useState("darkgrey");
  const { platformNumber, accountName } = useParams();

  const history = useHistory();

  const classType: (classType: number) => string = (classType: number) => {
    switch (classType) {
      case 0:
        return "Titan";
      case 1:
        return "Hunter";
      case 2:
        return "Warlock";
      default:
        return "no class found";
    }
  };

  const loading = async () => {
    const charInfo: characters[] | errorInFetch = await getAccountInfo(
      platformNumber,
      accountName
    );

    if ((charInfo as errorInFetch).error) {
      history.push("/");
    }

    const stats = await getAccountStats(platformNumber, accountName);

    setAccountCharacters(charInfo as characters[]);
    setAllStats(stats.weaponStats);
    setActivityStats(stats.activitystats);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      loading();
    }
  });

  if (!isLoading) {
    return <Loading />;
  }

  const chars = accountCharacters.map(accountCharacter => (
    <div
      className="emblem"
      style={{
        backgroundImage:
          "url(" + url + accountCharacter.emblemBackgroundPath + ")",
        backgroundRepeat: "no-repeat"
      }}
      key={accountCharacter.classType}
    >
      <div className="characterInfo">
        <h1 className="characterLigth">✦{accountCharacter.light}</h1>
        <h2 className="characterClassType">
          {classType(accountCharacter.classType)}
        </h2>
      </div>
    </div>
  ));

  const showWitchStats = () => {
    if (witchStats) {
      return <ShowAllTimeStats stats={allStats.pvp.allTime} />;
    } else {
      return <ShowAllTimeStats stats={allStats.pve.allTime} />;
    }
  };

  const changeAcctivity = (change: boolean) => {
    if (change) {
      setWitchStats(true);
      setPvpBackgroundColor("white");
      setPveBackgroundColor("darkgrey");
    } else {
      setWitchStats(false);
      setPvpBackgroundColor("darkgrey");
      setPveBackgroundColor("white");
    }
  };

  return (
    <div>
      <div className="">{chars}</div>
      <div className="activitySelect">
        <h3
          style={{ backgroundColor: pvpBackgroundColor }}
          onClick={() => changeAcctivity(true)}
        >
          PvP
        </h3>
        <h3
          style={{ backgroundColor: pveBackgroundColor }}
          onClick={() => changeAcctivity(false)}
        >
          PvE
        </h3>
      </div>
      {showWitchStats()}
    </div>
  );
};

export default ShowAccountInfo;
