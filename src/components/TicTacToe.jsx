import TicTacProvider from "../context/TicTacProvider"
import History from "./tictacComponents/History"
import Square from "./tictacComponents/Square"


function TicTacToe() {

    return (<>
        <TicTacProvider>
            <div className="flex mt-10 justify-center gap-4">
                <Square/>
                <History/>
            </div>
        </TicTacProvider>
    </>)
}


export default TicTacToe

