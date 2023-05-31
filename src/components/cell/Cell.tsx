import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { ICell } from '../../models/Cell'

export interface ICellProps {
  cell: ICell,
  onpress: (id: number) => void,
  size?: number,
}

const Cell = (props: ICellProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        { width: props.size ?? 100 }
      ]}
      onPress={() => props.onpress(props.cell.id)}>
      <Text
        style={[
          styles.text,
          {
            fontSize: 0.5 * (props.size ?? 100)
          }]}
      >
        {props.cell.state}
      </Text>
    </Pressable>
  )
}

export default Cell

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 100,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 50,
  },
})