import { allCharactersStats, allStats } from '../../types/types';
import { activityPvEPVP, activityStats } from '../../types/types';

const genereateTempleteWeaponStats: () => allCharactersStats = () => {
  const temp: allCharactersStats = {
    pve: {
      allTime: gerenteStats()
    },
    pvp: {
      allTime: gerenteStats()
    }
  };

  return temp;
};


const gerenteStats: () => allStats = () => {
  const temp: allStats = {
    weaponKillsAutoRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsBow: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsFusionRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsGrenade: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsGrenadeLauncher: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsHandCannon: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsMachineGun: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsMelee: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsPulseRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsRelic: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsRocketLauncher: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsScoutRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsShotgun: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsSideArm: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsSniper: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsSubmachinegun: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsSuper: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsSword: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponKillsTraceRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsAutoRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsBow: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsFusionRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsHandCannon: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsMelee: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsPulseRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsScoutRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsShotgun: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsSideArm: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsSniper: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsSubmachinegun: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    weaponPrecisionKillsTraceRifle: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
  };

  return temp;
};

const genereateTempleteActivity = () => {
  const temp: activityPvEPVP = {
    pve: gerenteStatsActivity(),
    pvp: gerenteStatsActivity()
  };

  return temp;
}

const gerenteStatsActivity = () => {
  const obj: activityStats = {
    activitiesEntered: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    activitiesWon: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    }, kills: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    killsDeathsRatio: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    precisionKills: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    publicEventsCompleted: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
    heroicPublicEventsCompleted: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    }
  };

  return obj;
}

export {
  genereateTempleteWeaponStats,
  gerenteStats,
  genereateTempleteActivity
}