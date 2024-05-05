export enum DataState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR'
}

export interface AppState <T>{
  state:DataState;
  data?:T;
  error?:string
}
