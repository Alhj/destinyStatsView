export interface respons {
  statusCode: number
  message: string
  characters: characters[]
}

export interface characters {
  emblemBackgroundPath: string
  classType: number
  light: number
}

export interface responsAllChars {
  status: number
  message: string
  Response: {
    weaponStats: allCharactersStats
    activitystats: activityPvEPVP
  }
}

export interface allCharactersStats {
  pve: {
    allTime: allStats
  }
  pvp: {
    allTime: allStats
  }
}

export interface activityPvEPVP {
  pve: activityStats
  pvp: activityStats
}

export interface activityStats {
  activitiesEntered: activitiesInfoStats
  activitiesWon: activitiesInfoStats
  kills: weaponKillsStats
  killsDeathsRatio: activitiesInfoStats
  precisionKills: weaponKillsStats
}


export interface charactersStats {
  characterId: string
  deleted: boolean
  result: allStats
}

export interface allStats {
  weaponKillsAutoRifle: weaponKillsStats
  weaponPrecisionKillsAutoRifle: weaponKillsStats
  weaponKillsFusionRifle: weaponKillsStats
  weaponPrecisionKillsFusionRifle: weaponKillsStats
  weaponKillsGrenade: weaponKillsStats
  weaponKillsGrenadeLauncher: weaponKillsStats
  weaponKillsHandCannon: weaponKillsStats
  weaponPrecisionKillsHandCannon: weaponKillsStats
  weaponKillsTraceRifle: weaponKillsStats
  weaponPrecisionKillsTraceRifle: weaponKillsStats
  weaponKillsMachineGun: weaponKillsStats
  weaponKillsMelee: weaponKillsStats
  weaponPrecisionKillsMelee: weaponKillsStats
  weaponKillsPulseRifle: weaponKillsStats
  weaponPrecisionKillsPulseRifle: weaponKillsStats
  weaponKillsRocketLauncher: weaponKillsStats
  weaponKillsScoutRifle: weaponKillsStats
  weaponPrecisionKillsScoutRifle: weaponKillsStats
  weaponKillsShotgun: weaponKillsStats
  weaponPrecisionKillsShotgun: weaponKillsStats
  weaponKillsSniper: weaponKillsStats
  weaponPrecisionKillsSniper: weaponKillsStats
  weaponKillsSubmachinegun: weaponKillsStats
  weaponPrecisionKillsSubmachinegun: weaponKillsStats
  weaponKillsSuper: weaponKillsStats
  weaponKillsSideArm: weaponKillsStats
  weaponPrecisionKillsSideArm: weaponKillsStats
  weaponKillsSword: weaponKillsStats
  weaponKillsRelic: weaponKillsStats
  weaponKillsBow: weaponKillsStats
  weaponPrecisionKillsBow: weaponKillsStats
}

export interface errorInFetch {
  statusCode: number
  message: string
  error: number
}

export interface profilId {
  statusCode: number
  message: string
  Respons: string
}


interface activitiesInfoStats {
  statId: string
  basic: {
    value: number,
    displayValue: string
  }
}

interface weaponKillsStats {
  statId: string
  basic: weaponsStatsBasic
}

interface weaponsStatsBasic {
  value: number,
  displayValue: string
}