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

    const newCells = cells.map(cell => {
      if (cell.id === id) {
        return {
          ...cell,
          state: player
        }
      }
      return cell
    })
    setCells(newCells as ICell[])

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

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Grid cells={cells} onpress={handlePress} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {game === 'playing' && `${player}'s turn`}
        {game === 'wonO' && 'O won!'}
        {game === 'wonX' && 'X won!'}
        {game === 'draw' && 'Draw!'}
      </Text>
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