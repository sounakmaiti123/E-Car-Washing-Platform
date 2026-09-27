import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../utils/storage'
const users=[{name:'Aarav Mehta',email:'customer@ewash.com',role:'customer'},{name:'Rohan Sharma',email:'provider@ewash.com',role:'provider'},{name:'Admin EWASH',email:'admin@ewash.com',role:'admin'}]
export const currentUser=()=>getLocalStorage('ewash_user',null)
export const login=(email)=>{ const user=users.find(u=>u.email===email)||{name:email.split('@')[0],email,role:'customer'}; setLocalStorage('ewash_user',user); return user }
export const logout=()=>removeLocalStorage('ewash_user')
