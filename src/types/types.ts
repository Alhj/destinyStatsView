export interface actionTypes {
  type: string,
  payload: string | number
}

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
    activityStats: activityPvEPVP
    pvpMedels:medels
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
  publicEventsCompleted:activitiesInfoStats
  heroicPublicEventsCompleted:activitiesInfoStats
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

export interface medels {
  medalAvenger:activitiesInfoStats
  medalPayback:activitiesInfoStats
  medalStreak5x:activitiesInfoStats
  medalQuickStrike:activitiesInfoStats
  medalDefeatWarlockSigil: activitiesInfoStats
  medalDefeatHunterDodge: activitiesInfoStats
  medalDefeatTitanBrace: activitiesInfoStats
  medalStreak10x:activitiesInfoStats
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