import TicTacProvider from "../context/TicTacProvider"
import History from "./tictacComponents/History"
import Square from "./tictacComponents/Square"


function TicTacToe() {

    return (<>
        <TicTacProvider>
            <div className="w-[calc(85vw)] bg-white rounded-2xl shadow-xl py-20 mx-auto flex flex-wrap mt-10 justify-center gap-4">
                <Square/>
                <History/>
            </div>
        </TicTacProvider>
    </>)
}


export default TicTacToe

