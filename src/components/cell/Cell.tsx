import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { ICell } from '../../models/Cell'

export interface ICellProps {
  cell: ICell,
  onpress: (id: number) => void,
  size?: number,
}

const DEFAULT_SIZE = 100

const Cell = (props: ICellProps) => {
  return (
    <Pressable onPress={() => props.onpress(props.cell.id)}>
      <Text
        style={[
          styles.text,
          {
            width: props.size ?? DEFAULT_SIZE,
            fontSize: 0.5 * (props.size ?? DEFAULT_SIZE)
          }]}
      >
        {props.cell.state}
      </Text>
    </Pressable>
  )
}

export default Cell

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    aspectRatio: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})