import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector } from "react-redux";
import Loading from "../loading";
import ShowAllTimeStats from "../showAllTimeStats";
import ActivityStatsPvP from "../activityStatsPvP";
import ActivityStatsPvE from "../activityStatsPvE";
import Medels from "../medels";
import {
  getAccountInfo,
  getAccountStats
} from "../../helpers/fetch/getAccountInfo";
import { characters, errorInFetch } from "../../types/types";
import { medels, allCharactersStats, activityPvEPVP } from "../../types/types";
import "./showAccountInfo.css";

const url: string = "https://www.bungie.net";

interface state {
  displayName: string;
}

const ShowAccountInfo = () => {
  const firstChar: characters = {
    emblemBackgroundPath: "",
    classType: 0,
    light: 0
  };
  const displayName = useSelector((state: state) => {
    return state.displayName;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [accountCharacters, setAccountCharacters] = useState([firstChar]);
  const [weaponsStats, setWeaponsStats] = useState<allCharactersStats>();
  const [activityStats, setActivityStats] = useState<activityPvEPVP>();

  const [medelStats, setMedelStats] = useState<medels>();

  const [witchStats, setWitchStats] = useState(true);
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
    setWeaponsStats(stats.weaponStats);
    setActivityStats(stats.activityStats);
    setMedelStats(stats.pvpMedels);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      loading();
      document.title = `Destiny stats ${displayName}`;
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
      return (
        <ShowAllTimeStats
          stats={(weaponsStats as allCharactersStats).pvp.allTime}
        />
      );
    } else {
      return (
        <ShowAllTimeStats
          stats={(weaponsStats as allCharactersStats).pve.allTime}
        />
      );
    }
  };

  const changeAcctivity = (change: boolean) => {
    if (change) {
      setWitchStats(true);
    } else {
      setWitchStats(false);
    }
  };

  const showActivity = () => {
    if (witchStats) {
      return <ActivityStatsPvP stats={activityStats as activityPvEPVP} />;
    } else {
      return <ActivityStatsPvE stats={activityStats as activityPvEPVP} />;
    }
  };

  const showMedels = () => {
    if (witchStats) {
      return <Medels medels={medelStats as medels} />;
    } else {
      return "";
    }
  };

  return (
    <section className="accountStats contentWraper">
      <div className="cointenerMain">
        <div className="cointenerAccountInfo">
          <div className="itemAccountInfo">
            <div className="itemAcc">{chars}</div>
          </div>
        </div>
        <div className="activitySelect">
          <h3
            style={{ backgroundColor: witchStats ? "#5B89A6" : "#8C0303" }}
            onClick={() => changeAcctivity(true)}
          >
            PvP
          </h3>
          <h3
            style={{ backgroundColor: witchStats ? "#8C0303" : "#5B89A6" }}
            onClick={() => changeAcctivity(false)}
          >
            PvE
          </h3>
        </div>
        {showActivity()}
        {showWitchStats()}
        {showMedels()}
      </div>
    </section>
  );
};

export default ShowAccountInfo;
