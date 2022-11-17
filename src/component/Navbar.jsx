import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { Avatar } from "@nextui-org/react";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Realtime Chat</span>
      <div className="user">
        <Avatar zoomed xs className="aveta" src={currentUser.photoURL} alt="" />
        <p>{currentUser.displayName}</p>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar