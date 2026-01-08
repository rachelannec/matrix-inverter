export interface Matrix {
    data: number[][];
    rows: number;
    cols: number;
}

export interface Step {
    description: string;
    matrix: number[][];
    highlightedRows?: number[];
    operation?: string;
}
export interface SolutionResult {
    finalMatrix?: number[][];
    solution?: number[];
    error?: string;
}