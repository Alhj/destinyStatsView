import React from "react";
import { activityPvEPVP } from "../../types/types";
import './style.css'
interface stats {
  stats: activityPvEPVP;
}

const ActivityStats = (props: stats) => {
  const activity = props.stats.pvp;
  return (
    <div className="activtyStats">
      <h2>activity</h2>
      <div className="cointener">
        <div className="item">
          <h3>
            activity enter:{" "}
            {activity.activitiesEntered
              ? activity.activitiesEntered.basic.displayValue
              : 0}
          </h3>
        </div>
        <div className="item">
          <h3>
            total kills: {activity.kills ? activity.kills.basic.displayValue : 0}
          </h3>
        </div>
        <div className="item">
          <h3>
            kd:{" "}
            {activity.killsDeathsRatio
              ? activity.killsDeathsRatio.basic.displayValue
              : 0}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ActivityStats;
