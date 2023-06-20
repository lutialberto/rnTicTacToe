import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Cell from './src/components/cell/Cell'
import { ICell } from './src/models/Cell'
import { GRID_INITIAL_STATE } from './src/constants/GridInitialState'
import { Player } from './src/models/Player'
import { GameState } from './src/models/GameState'
import Grid from './src/components/grid/Grid'
import { checkDiagonals, checkDraw, checkcolumns, checkrows } from './src/utils/checkGameState'

const App = () => {
  const [cells, setCells] = useState<ICell[]>(GRID_INITIAL_STATE)
  const [player, setPlayer] = useState<Player>('X')
  const [game, setGame] = useState<GameState>('playing')

  const handlePress = (id: number) => {
    if (cells[id].state !== '') return;
    if (game !== 'playing') return;

    const newCells: ICell[] = cells.map(cell => cell.id === id ? { ...cell, state: player } : cell)
    setCells(newCells)

    let result = checkrows(newCells)
    if (result) {
      setGame(result === 'X' ? 'wonX' : 'wonO')
      return;
    }

    result = checkcolumns(newCells)
    if (result) {
      setGame(result === 'X' ? 'wonX' : 'wonO')
      return;
    }

    result = checkDiagonals(newCells)
    if (result) {
      setGame(result === 'X' ? 'wonX' : 'wonO')
      return;
    }

    if (checkDraw(newCells)) {
      setGame('draw')
      return;
    }

    setPlayer(prev => prev === 'X' ? 'O' : 'X')
  }

  const handleReset = () => {
    setCells(GRID_INITIAL_STATE)
    setPlayer('X')
    setGame('playing')
  }

  let gameStateLabel = '';
  switch (game) {
    case 'playing': gameStateLabel = `${player}'s turn`; break;
    case 'wonO': gameStateLabel = 'O won!'; break;
    case 'wonX': gameStateLabel = 'X won!'; break;
    case 'draw': gameStateLabel = 'Draw!'; break;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Grid cells={cells} onpress={handlePress} cellsSize={70} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{gameStateLabel}</Text>
      <Button title="Play Again" onPress={handleReset} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
})