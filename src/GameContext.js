import React from 'react'

const GameContext = React.createContext({ points: 0, highScore: 0})

export const GameProvider = GameContext.Provider
export const GameConsumer = GameContext.Consumer
export default GameContext