import { useState } from "react";
import { Board, Column } from "../models/models.types";

export function useBoard(initialBoard?: Board | null) {
    const [board, setBoard] = useState<Board | null>(initialBoard || null);
    const [columns, setColumns] = useState<Column[] | null>(initialBoard?.columns || []);
    const [error, setError] = useState<string | null>(null);
}
