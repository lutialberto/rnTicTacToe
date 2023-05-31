import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ICell } from '../../models/Cell'
import Cell from '../cell/Cell'

export interface IGridProps {
  cells: ICell[],
  onpress: (id: number) => void,
}

const Grid = (props: IGridProps) => {
  return (
    <View style={styles.grid}>
      {props.cells.map((cell: ICell) => {
        return <Cell
          key={cell.id}
          cell={cell}
          onpress={id => props.onpress(id)}
        />
      })}
    </View>
  )
}

export default Grid

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 320,
    aspectRatio: 1,
    gap: 10,
  }
})