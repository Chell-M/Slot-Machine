import React, { useState } from 'react'
import SlotMachine from './SlotMachine'

const User = () => {
  const [bank, setBank] = useState(1000)
  const [bet, setBet] = useState(25)
  const [isButtonDisabled, setButtonDisabled] = useState(false)

  const checkDisableButton = () => {
    if (bank < bet || bet * 2 > bank) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }
  }

  const increaseBetOnClick = () => {
    if (bet < bank) {
      setBet(bet + 25)
    }
    checkDisableButton()
  }

  const decreaseBetOnClick = () => {
    if (bet > 0) {
      setBet(bet - 25)
    }
    checkDisableButton()
  }

  const spinOnClick = (payout) => {
    if (payout > 0) {
      setBank((prevbank) => prevbank + bet * 10)
    } else {
      setBank((prevbank) => prevbank - bet)
    }
    checkDisableButton()
  }

  return (
    <div>
      <p>Bank balance: {bank}</p>
      <p>bet: {bet}</p>
      <button onClick={decreaseBetOnClick}>-</button>
      <button onClick={increaseBetOnClick}>+</button>
      <SlotMachine bet={bet} spinOnClick={spinOnClick} isButtonDisabled={isButtonDisabled} />
    </div >
  )
}

export default User
