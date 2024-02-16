/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage"

export const TicTacContext = createContext()

function TicTacProvider({ children }) {

    const [history, setHistory] = useLocalStorage("history", [Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useLocalStorage("currentMove", 0)
    const xIsNext = currentMove % 2 === 0
    const currentSquare = history[currentMove]
    const [winner, setWinner] = useState(null)

    function updateHistory(square) {
        setHistory([...history.slice(0, currentMove + 1), square])
    }

    function resetGame(){
        setHistory([Array(9).fill(null)])
        setCurrentMove(0)
    }

    function putWinner(win){
        setWinner(win)
    }

    return (
        <TicTacContext.Provider value={{
            xIsNext,
            currentMove,
            currentSquare,
            history,
            winner,
            setCurrentMove,
            updateHistory,
            resetGame,
            putWinner
        }}>
            {children}
        </TicTacContext.Provider>
    )
}

export default TicTacProvider