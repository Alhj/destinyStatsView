import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { activityPvEPVP } from "../../types/types";
import { windowWidthCheck } from "../../helpers/lib/window";
import "./style.css";

interface stats {
  stats: activityPvEPVP;
}

const ActivityStatsPvE = (props: stats) => {
  const activity = props.stats.pve;

  const [show, setShow] = useState(windowWidthCheck());

  const handelClick = () => {
    setShow(show ? false : true);
  };

  return (
    <section className="accountActivityStats contentWraper">
      <div className="activtyStats">
        <h2>activity</h2>
        <div className="cointener" style={{ display: show ? "flex" : "none" }}>
          <div className="item">
            <h3>total kills: {activity.kills.basic.displayValue}</h3>
          </div>
          <div className="item">
            <h3>
              precions kills: {activity.precisionKills.basic.displayValue}
            </h3>
          </div>
          <div className="item">
            <h3>
              public events completed:{" "}
              {activity.publicEventsCompleted.basic.displayValue}
            </h3>
          </div>
          <div className="item">
            <h3>
              heroic public event completed:{" "}
              {activity.heroicPublicEventsCompleted.basic.displayValue}
            </h3>
          </div>
        </div>
        <span className="showStats" onClick={() => handelClick()}>
          <h3>{show ? (
                <FontAwesomeIcon icon="arrow-up" color="white" />
              ) : (
                <FontAwesomeIcon icon="arrow-down" color="white" />
              )}</h3>
        </span>
      </div>
    </section>
  );
};

export default ActivityStatsPvE;
