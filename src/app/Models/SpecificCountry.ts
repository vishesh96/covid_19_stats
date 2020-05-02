export interface IState {
  state: IData;
  _id: string;
  name: string;
  confirmed: number;
  cured: number;
  death: number;
  total: number;

}
export interface IData {
  _id: string;
  name: string;
  confirmed: number;
  cured: number;
  death: number;
  total: number;
}
export interface IIndia {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number,
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  totalTests: number;
  testsPerOneMillion: number;

}
