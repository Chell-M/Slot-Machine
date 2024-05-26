import React, { useState } from 'react'
import SlotMachine from './SlotMachine'

const User = () => {
  const [bank, setBank] = useState(1000)
  const [bet, setBet] = useState(25)

  const increaseBetOnClick = () => {
    if (bet < bank) setBet(bet + 25)
  }

  const decreaseBetOnClick = () => {
    if (bet > 0)
      setBet(bet - 25)
  }

  const spinOnClick = () => {
    if (bet < bank && bank > 0)
      setBank(prevbank => prevbank - bet)
  }


  return (
    <div>
      <p>Bank balance: {bank}</p>
      <p>bet: {bet}</p>
      <button onClick={decreaseBetOnClick}>-</button>
      <button onClick={increaseBetOnClick}>+</button>
      <SlotMachine bet={bet} spinOnClick={spinOnClick} />
    </div>
  )
}

export default User
