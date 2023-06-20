import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ICell } from '../../models/Cell'
import Cell from '../cell/Cell'

export interface IGridProps {
  cells: ICell[],
  cellsSize?: number,
  onpress: (id: number) => void,
}

const Grid = (props: IGridProps) => {
  return (
    <View style={[styles.grid, { width: (props.cellsSize ?? 100) * 3 + 20 }]}>
      {props.cells.map((cell: ICell) => {
        return <Cell
          key={cell.id}
          cell={cell}
          onpress={id => props.onpress(id)}
          size={props.cellsSize}
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
    aspectRatio: 1,
    gap: 10,
  }
})