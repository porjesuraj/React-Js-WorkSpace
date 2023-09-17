import { useState } from 'react'
import './App.css'
import { UserCard } from './user-card/UserCard'
import user from './user-card/User.json'
import  './user-card/UserCard.css'
import { UserCardClass } from './user-card/UserCardClass'
function App() {

  return (
    <>
<UserCard age={user.age} name={user.name} phoneNumber={user.phoneNumber} address={user.address} />
<UserCardClass age={user.age} name={user.name} phoneNumber={user.phoneNumber} address={user.address} />
    </>
  )
}

export default App
