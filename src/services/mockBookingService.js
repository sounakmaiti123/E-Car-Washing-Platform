import { getLocalStorage, setLocalStorage } from '../utils/storage'
const key = 'ewash_bookings'
export const getBookings = () => getLocalStorage(key, [])
export const createBooking = (data) => { const booking = {...data, id:`EW-2026-${String(Date.now()).slice(-6)}`, status:'Confirmed', createdAt:new Date().toISOString()}; setLocalStorage(key,[booking,...getBookings()]); return booking }
export const updateBooking = (id, changes) => { const items=getBookings().map(b=>b.id===id?{...b,...changes}:b); setLocalStorage(key,items); return items.find(b=>b.id===id) }
