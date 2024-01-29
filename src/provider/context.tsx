import React from "react"
import { TAuthUser, TUserInfo } from "./schema"

export type TContext ={
  
  auth?:TAuthUser | null
  login?:(newUser:TAuthUser)=>void
  logout?:()=>void
  userInfo?:TUserInfo | null
  chargeUserInfo?:(nfoUser:TAuthUser)=>void
}
const example:TContext   = {}


const PostContext = React.createContext(example)

export function PostContextProvider ({children}){
  const [auth , setAuth] = React.useState(null)
  const [ userInfo , setUserInfo] =React.useState(null)

  const login= (newUser:TAuthUser)=>{
    setAuth(newUser)
  }
  const chargeUserInfo=(infoUser:TAuthUser)=>{
    setUserInfo(infoUser)
  }
  const logout= ()=>{
    setAuth(null)
    setUserInfo(null)
  }


  const values:TContext ={
    auth,
    login,
    logout,
    userInfo,
    chargeUserInfo
    
  }
  return(
    <PostContext.Provider value={values}>
      {children}
    </PostContext.Provider>
  )
}
 export default function Context(){return( React.useContext(PostContext))}

