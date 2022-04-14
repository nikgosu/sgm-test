export interface Letter {
  value: number | boolean
  dateRelease?: string
}

export interface Year {
  XX: Letter,
  YY: Letter,
  ZZ: Letter,
}

export interface Region {
  2017: Year,
  2018?: Year,
  2019?: Year,
}

export interface G {
  G: Region
}

export interface Data {
  Kyivska: G,
  Odeska: G,
  Lvivska: G,
}

export interface PopUpItem {
  value: string,
  date: string,
  user: string
  comment: string
}







