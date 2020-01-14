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
  status: number,
  message: string
  Response: allCharactersStats
}

export interface allCharactersStats {
  pve: {
    allTime: allStats
  }
  pvp: {
    allTime: allStats
  }
}

export interface charactersStats {
  characterId: string
  deleted: boolean
  result: allStats
}

export interface allStats {
  activitiesEntered: activitiesEnteredStats
  weaponKillsAutoRifle: weaponKillsStats
  weaponKillsFusionRifle: weaponKillsStats
  weaponKillsGrenade: weaponKillsStats
  weaponKillsGrenadeLauncher: weaponKillsStats
  weaponKillsHandCannon: weaponKillsStats
  weaponKillsTraceRifle: weaponKillsStats
  weaponKillsMachineGun: weaponKillsStats
  weaponKillsMelee: weaponKillsStats
  weaponKillsPulseRifle: weaponKillsStats
  weaponKillsRocketLauncher: weaponKillsStats
  weaponKillsScoutRifle: weaponKillsStats
  weaponKillsShotgun: weaponKillsStats
  weaponKillsSniper: weaponKillsStats
  weaponKillsSubmachinegun: weaponKillsStats
  weaponKillsSuper: weaponKillsStats
  weaponKillsSideArm: weaponKillsStats
  weaponKillsSword: weaponKillsStats
  weaponKillsRelic: weaponKillsStats
  weaponKillsBow: weaponKillsStats
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


interface activitiesEnteredStats {
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