import { ICell } from '../models/Cell';

export const checkrows = (newCells: ICell[]) => {
  for (let i = 0; i < 9; i += 3) {
    if (newCells[i].state === newCells[i + 1].state && newCells[i + 1].state === newCells[i + 2].state && newCells[i].state !== '') {
      return newCells[i].state;
    }
  }
  return '';
}

export const checkcolumns = (newCells: ICell[]) => {
  for (let i = 0; i < 3; i++) {
    if (newCells[i].state === newCells[i + 3].state && newCells[i + 3].state === newCells[i + 6].state && newCells[i].state !== '') {
      return newCells[i].state;
    }
  }
  return '';
}

export const checkDiagonals = (newCells: ICell[]) => {
  if (newCells[0].state === newCells[4].state && newCells[4].state === newCells[8].state && newCells[0].state !== '') {
      return newCells[0].state;
  }

  if (newCells[2].state === newCells[4].state && newCells[4].state === newCells[6].state && newCells[2].state !== '') {
    return newCells[2].state;
  }

  return '';
}

export const checkDraw = (newCells: ICell[]) => {
  return newCells.every(cell => cell.state !== '');
}
