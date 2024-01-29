

const BASE_URL ='https://server-apipost.onrender.com/'

const DEV_URL = 'http://localhost:4000/'
const isDev = true

const url =DEV_URL



const apiUser ={
  getAllUser:()=>`${url}api/user`,
  getUserID:(id:number)=>`${url}api/user/${id}`,
  fallowUserID:(id:string)=>`${url}api/user/follow/${id}`,
}

const apiPost ={
  getAllPost:()=>`${url}api/post`,
  getPostID:(id:string)=>`${url}api/post/${id}`,
  fallowPostID:(id:string)=>`${url}api/post/like/${id}`,
  likeAPost:(id:string)=>`${url}api/post/like/like/${id} `
}
const apiAuth ={
  send:`${url}api/auth/login`
}

export default  {
  apiUser,
  apiPost,
  apiAuth
}