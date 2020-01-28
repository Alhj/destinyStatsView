import React from "react";
import { activityPvEPVP } from "../../types/types";
import "./style.css";

interface stats {
  stats: activityPvEPVP;
}

const ActivityStatsPvE = (props: stats) => {
  const activity = props.stats.pve;

  return (
    <div className="activtyStats">
      <h2>activity</h2>
      <div className="cointener">
        <div className="item">
          <h3>total kills: {activity.kills.basic.displayValue}</h3>
        </div>
        <div className="item">
          <h3>precions kills: {activity.precisionKills.basic.displayValue}</h3>
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
    </div>
  );
};

export default ActivityStatsPvE;
