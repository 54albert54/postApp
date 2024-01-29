

export interface TUser {
  id:number
  name:string
  userName:string
  followers:[]
  youFollow:[]
  viewPostLike:[]
}

export interface TPost {
  id:number
  title:string
  detail:string
  owner_id:number
  owner_name?:string
  userThatLike?:[]
  
}

export interface TAuthUser {
  showData:{
    id:number
    name:string
    userName:string
  }
  token:string
}
export interface TUserInfo {
    id:number
    name:string
    userName:string
    followers:[]
    youFollow:[]
    viewPostLike:[]
}