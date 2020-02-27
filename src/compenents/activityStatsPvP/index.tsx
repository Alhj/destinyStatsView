import React, { useState } from "react";
import { activityPvEPVP } from "../../types/types";
import { windowWidthCheck } from "../../helpers/lib/window";

interface stats {
  stats: activityPvEPVP;
}

const ActivityStats = (props: stats) => {
  const activity = props.stats.pvp;

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
            <h3>
              activity enter:{" "}
              {activity.activitiesEntered
                ? activity.activitiesEntered.basic.displayValue
                : 0}
            </h3>
          </div>
          <div className="item">
            <h3>
              total kills:{" "}
              {activity.kills ? activity.kills.basic.displayValue : 0}
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
        <span className="showStats" onClick={() => handelClick()}>
          <h3>{show ? "-" : "+"}</h3>
        </span>
      </div>
    </section>
  );
};

export default ActivityStats;
