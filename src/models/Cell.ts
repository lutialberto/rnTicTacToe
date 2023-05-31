export interface ICell {
    id: number;
    state: CellState;
}

export type CellState = 'X' | 'O' | '';