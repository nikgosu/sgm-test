
export interface PopupItem {
  value: string,
  date: string,
  user: string,
  comment: string
}

export interface Letter {
  id?: number
  value: any
  dateRelease?: string
  popupData?: PopupItem[]
}

export interface Year {
  XX: Letter,
  YY: Letter,
  ZZ: Letter,
  WW?: Letter
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





