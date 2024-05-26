import React, { useState } from 'react'

const SlotMachine = ({ bet, spinOnClick }) => {
  const [reels, setReels] = useState([1, 2, 3])
  const [payout, setPayout] = useState(0)


  const getRandomIndex = () => Math.floor(Math.random() * 4)

  const reelsContainer = () => {
    return ([getRandomIndex(), getRandomIndex(), getRandomIndex()])
  }

  const handleSpinOnClick = () => {
    const updatedReels = reelsContainer()
    setReels(updatedReels)
    checkPayLines(reels)
    spinOnClick()
  }

  const checkPayLines = (reels) => {
    if (reels[0] === reels[1] && reels[1] === reels[2]) {
      setPayout(bet * 5)
    } else {
      setPayout(0)
    }
  }

  return (
    <div className="slot-machine">
      <div id="reels">
        {reels[0]} - {reels[1]} - {reels[2]}
        <p> Payout: {payout}</p>
        <button onClick={handleSpinOnClick}>Spin</button>
      </div>
    </div>
  )
}

export default SlotMachine
