import React from "react";
import { gerenteStats } from "../../helpers/genereateTemplete/generateAllStatsMocObject";
import { allStats } from "../../types/types";

import "./showAllTimeStats.css";

interface propsInterface {
  stats: allStats;
}

const showAllTimeStats = (props: propsInterface) => {
  let stats = props.stats;

  if (!stats) {
    stats = gerenteStats();
  }

  return (
    <div>
      <div className="abilty">
        <h2>Abilitys</h2>
        <div className="cointener">
          <div className="item">
            <h3>Grenade kills: {stats.weaponKillsGrenade.basic.value}</h3>
          </div>
          <div className="item">
            <h3>Melee kills: {stats.weaponKillsMelee.basic.value}</h3>
          </div>
          <div className="item">
            <h3>Super kills: {stats.weaponKillsSuper.basic.value}</h3>
          </div>
        </div>
      </div>
      <div className="primary">
        <h2>primary weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>Handcanon</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsHandCannon.basic.value
                  ? stats.weaponKillsHandCannon.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsHandCannon.basic.value
                  ? stats.weaponPrecisionKillsHandCannon.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Sidearms</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsSideArm.basic.value
                  ? stats.weaponKillsSideArm.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsSideArm.basic.value
                  ? stats.weaponPrecisionKillsSideArm.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Scout rifle</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsScoutRifle.basic.value
                  ? stats.weaponKillsScoutRifle.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsScoutRifle.basic.value
                  ? stats.weaponPrecisionKillsScoutRifle.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Pulse rifle</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsPulseRifle.basic.value
                  ? stats.weaponKillsPulseRifle.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsPulseRifle.basic.value
                  ? stats.weaponPrecisionKillsPulseRifle.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Auto rifle </h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsAutoRifle.basic.value
                  ? stats.weaponKillsAutoRifle.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsAutoRifle.basic.value
                  ? stats.weaponPrecisionKillsAutoRifle.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Bow</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsBow.basic.value
                  ? stats.weaponKillsBow.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsBow.basic.value
                  ? stats.weaponPrecisionKillsBow.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Submachine gun</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsSubmachinegun.basic.value
                  ? stats.weaponKillsSubmachinegun.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsSubmachinegun.basic.value
                  ? stats.weaponPrecisionKillsSubmachinegun.basic.value
                  : 0}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="special">
        <h2> special weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>Sniper rifle</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsSniper.basic.value
                  ? stats.weaponKillsSniper.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsSniper.basic.value
                  ? stats.weaponPrecisionKillsSniper.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Fusion rifle </h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsFusionRifle.basic.value
                  ? stats.weaponKillsFusionRifle.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsFusionRifle.basic.value
                  ? stats.weaponPrecisionKillsFusionRifle.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Shotgun</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsShotgun.basic.value
                  ? stats.weaponKillsShotgun.basic.value
                  : 0}
              </h3>
              <h3>
                Precision:{" "}
                {stats.weaponPrecisionKillsShotgun.basic.value
                  ? stats.weaponPrecisionKillsShotgun.basic.value
                  : 0}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="heavy">
        <h2>heavy weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>Rocket launchers</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsRocketLauncher.basic.value
                  ? stats.weaponKillsRocketLauncher.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Swords</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsSword.basic.value
                  ? stats.weaponKillsSword.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Machinegun</h3>
            <div>
              <h3>
                Kills:{" "}
                {stats.weaponKillsMachineGun.basic.value
                  ? stats.weaponKillsMachineGun.basic.value
                  : 0}
              </h3>
            </div>
          </div>
          <div className="item">
            <h3>Grenade launcher</h3>
            <div>
              <h3>
                Kills:
                {stats.weaponKillsGrenadeLauncher.basic.value
                  ? stats.weaponKillsRocketLauncher.basic.value
                  : 0}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showAllTimeStats;
