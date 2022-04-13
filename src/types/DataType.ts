export interface DataLetter {
  value: number | boolean
  dateRelease?: string
}

export interface DataYear {
  XX: DataLetter,
  YY: DataLetter,
  ZZ: DataLetter,
}

export interface DataRegion {
  2017: DataYear,
  2018?: DataYear,
  2019?: DataYear,
}

export interface DataG {
  G: DataRegion
}

export interface Data {
  Kyivska: DataG,
  Odeska: DataG,
  Lvivska: DataG,
}





