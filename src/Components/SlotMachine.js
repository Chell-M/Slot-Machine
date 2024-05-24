import React, { useState } from 'react'

const SlotMachine = () => {

  const [reels, setReels] = useState([1, 2, 3])

  const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length)

  const reelsContainer = () => {
    const reel1 = [1, 2, 3]
    const reel2 = [2, 2, 3]
    const reel3 = [3, 2, 3]

    const randomIndex1 = getRandomIndex(reel1)
    const randomIndex2 = getRandomIndex(reel2)
    const randomIndex3 = getRandomIndex(reel3)

    const result1 = reel1[randomIndex1]
    const result2 = reel2[randomIndex2]
    const result3 = reel3[randomIndex3]
    return [result1, result2, result3]
  }

  const spinOnClick = () => {
    const updatedReels = reelsContainer()
    setReels(updatedReels)
  }

  return (
    <div className="slot-machine">
      <div id="reels">
        <div>
          {reels[0]} - {reels[1]} - {reels[2]}
        </div>
      </div>
      <button onClick={spinOnClick}>Spin</button>
    </div >
  )
}

export default SlotMachine
