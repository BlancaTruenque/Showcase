/* eslint-disable react/prop-types */
import { I18nContext } from "../../context/i18nProvider"
import { useContext, useEffect, useState } from "react"
import { TicTacContext } from "../../context/TicTacProvider"
import calculateWinner from "../../utils/calculateWinner"

function SquareElement({ handlePlay, value, winpos, id }) {
    return (<div onClick={handlePlay} className="border w-20 h-20 flex justify-center items-center">
        <p className={`${winpos.includes(id) && 'text-green-600'} text-4xl font-extrabold font-rubik-mono-one`}>
            {value}
        </p>
    </div>)
}

function Square() {

    const [tied, setTied] = useState(false)

    const { xIsNext,
        currentMove,
        winner,
        currentSquare,
        putWinner,
        updateHistory,
        setCurrentMove } = useContext(TicTacContext)
    const { t } = useContext(I18nContext)

    const [win, winpos] = calculateWinner(currentSquare)

    useEffect(() => {
        if (win) {
            putWinner(win)
        } else {
            putWinner(null)
        }
    }, [win, putWinner])

    useEffect(() => {
        if (currentMove === 9 && win === null) {
            setTied(true)
        } else {
            setTied(false)
        }
    }, [currentMove, win])


    function handlePlay(index) {

        if (win || currentSquare[index]) {
            return
        }

        const newSquare = currentSquare.slice()

        setCurrentMove(currentMove + 1)
        if (xIsNext) {
            newSquare[index] = "X"
        } else {
            newSquare[index] = "O"
        }

        updateHistory(newSquare)

    }

    return (<>
        <div>
            <div className="flex justify-center items-center h-10 text-center font-semibold uppercase">
                {winner === null && currentMove < 9 && `${t("next-player")} ${xIsNext ? "x" : "y"}`}
                {winner && `${t("won-game")} ${winner}`}
                {tied && t("tied-game")}
            </div>
            <div className="grid grid-cols-3">
                <SquareElement winpos={winpos} id={0} value={currentSquare[0]} handlePlay={() => handlePlay(0)} />
                <SquareElement winpos={winpos} id={1} value={currentSquare[1]} handlePlay={() => handlePlay(1)} />
                <SquareElement winpos={winpos} id={2} value={currentSquare[2]} handlePlay={() => handlePlay(2)} />
                <SquareElement winpos={winpos} id={3} value={currentSquare[3]} handlePlay={() => handlePlay(3)} />
                <SquareElement winpos={winpos} id={4} value={currentSquare[4]} handlePlay={() => handlePlay(4)} />
                <SquareElement winpos={winpos} id={5} value={currentSquare[5]} handlePlay={() => handlePlay(5)} />
                <SquareElement winpos={winpos} id={6} value={currentSquare[6]} handlePlay={() => handlePlay(6)} />
                <SquareElement winpos={winpos} id={7} value={currentSquare[7]} handlePlay={() => handlePlay(7)} />
                <SquareElement winpos={winpos} id={8} value={currentSquare[8]} handlePlay={() => handlePlay(8)} />
            </div>
        </div>
    </>)
}

export default Square