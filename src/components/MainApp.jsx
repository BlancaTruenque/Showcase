/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppStateContext } from "../context/AppStateProvider"
import Welcome from "./welcomePokemon/Welcome"

function MainView() {

    const { appData, setCurrentApp } = useContext(AppStateContext)

    return (<>
        <div className="flex my-16 gap-4 max-w-6xl flex-wrap m-auto justify-around">
            {appData.map(app => <div className="bg-white rounded-2xl max-w-80 justify-center shadow-lg"
                key={"app-" + app.shortName}
                onClick={() => setCurrentApp(app.shortName)}>
                <div className="w-full flex justify-center items-center h-56 overflow-hidden rounded-t-2xl">
                    <img src={app.imgUrl} />
                </div>
                <div className="my-5">
                    <h2 className="text-center font-bold text-2xl">{app.name}</h2>
                </div>
                <div className="flex flex-wrap gap-4 justify-center my-4">
                    {app.tags.map((tag, index) => <div className="bg-[#EFF4FF] outline-[#DBE6FE] outline rounded-full px-2 py-1" key={"tag-" + index}>
                        {tag}
                    </div>
                    )}
                </div>
            </div>
            )}
        </div>
    </>)
}


function MainApp() {
    // version 1
    const { currentApp } = useContext(AppStateContext) // pokemonAPI, TicTacToe

    return (<>
        <main className="flex-grow bg-[#F8FAFC]">
            {currentApp === "" && <MainView />}
            {currentApp === "tictac" && <h1>TicTacToe</h1>}
            {currentApp === "pokemon" && <h1>pokemonAPP</h1>}
            {currentApp === "wordle" && <h1>Wordle APP</h1>}
            {currentApp === "video" && <h1>Video APP</h1>}

            <Welcome />
        </main>
    </>)
}

export default MainApp