import React, { useState } from 'react'

const SlotMachine = ({ bet, spinOnClick, isButtonDisabled }) => {
  const [reels, setReels] = useState([1, 2, 3])
  const [payout, setPayout] = useState(0)

  const getRandomIndex = () => Math.floor(Math.random() * 4)

  const reelsContainer = () => {
    return ([getRandomIndex(), getRandomIndex(), getRandomIndex()])
  }

  const handleSpinOnClick = () => {
    const updatedReels = reelsContainer()
    setReels(updatedReels)
    const newPayout = calculatePayout(updatedReels)
    setPayout(newPayout)
    spinOnClick(newPayout)
  }

  const calculatePayout = (updatedReels) => {
    if (updatedReels[0] === updatedReels[1] && updatedReels[1] === updatedReels[2]) {
      return bet * 5
    }
  }

  return (
    <div className="slot-machine">
      <div id="payout-container">Payout: ${payout}</div>
      <div id="reels-container">
        <div className="reel">
          <div>{reels[0]}</div>-<div>{reels[1]}</div>-<div>{reels[2]}</div>
        </div>
      </div>
      <div id="buttons-container">
        <button onClick={handleSpinOnClick} disabled={isButtonDisabled}>Spin</button>
      </div>
    </div >
  )
}

export default SlotMachine
