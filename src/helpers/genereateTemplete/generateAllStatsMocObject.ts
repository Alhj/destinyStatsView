import { allCharactersStats, allStats } from '../../types/types';

const genereateTemplete: () => allCharactersStats = () => {
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
    activitiesEntered: {
      statId: 'none',
      basic: {
        value: 0,
        displayValue: '0',
      }
    },
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
    }
  };

  return temp;
};



export {
  genereateTemplete
}