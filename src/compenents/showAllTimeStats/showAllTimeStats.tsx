import React from "react";
import { allStats } from "../../types/types";

import "./showAllTimeStats.css";

interface propsInterface {
  stats: allStats;
}

const showAllTimeStats = (props: propsInterface) => {
  const stats = props.stats;

  return (
    <div>
      <div className="primary">
        <h2>priamary weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>
              Handcanon kills: {stats.weaponKillsHandCannon.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Sidearms: {stats.weaponKillsSideArm.basic.value}</h3>
          </div>
          <div className="item">
            <h3>
              Scout rifle kills: {stats.weaponKillsScoutRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Pulse rifle kills: {stats.weaponKillsPulseRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Auto rifle kills: {stats.weaponKillsAutoRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Bow Kills: {stats.weaponKillsBow.basic.value}</h3>
          </div>
          <div className="item">
            <h3>
              Submachine gun kills:
              {stats.weaponKillsSubmachinegun.basic.value}
            </h3>
          </div>
        </div>
      </div>
      <div className="special">
        <h2> special weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>
              Sniper rifle kills: {stats.weaponKillsSniper.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Fusion rifle kills: {stats.weaponKillsFusionRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Shotgun kills: {stats.weaponKillsShotgun.basic.value}</h3>
          </div>
        </div>
      </div>
      <div className="heavy">
        <h2>heavy weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>
              Rocket launchers kills:
              {stats.weaponKillsRocketLauncher.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Swords kills: {stats.weaponKillsSword.basic.value}</h3>
          </div>
          <div className="item">
            <h3>
              Machinegun kills: {stats.weaponKillsMachineGun.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Grenade launcher kills:{" "}
              {stats.weaponKillsGrenadeLauncher.basic.value}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showAllTimeStats;
