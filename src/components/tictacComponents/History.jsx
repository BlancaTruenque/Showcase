import { useContext } from "react"
import { TicTacContext } from "../../context/TicTacProvider"
import { I18nContext } from "../../context/i18nProvider"

function History() {

    const { history, setCurrentMove, resetGame } = useContext(TicTacContext)
    const {t} = useContext(I18nContext)

    return (<>
        <div className="flex flex-col gap-2">
            <button className="bg-[#B91C1C] px-4 py-1 w-40 text-lg text-white rounded-lg"
                onClick={() => resetGame()}>
                {t("reset-button")}
            </button>
            <p className="font-bold text-2xl">{t("go-to")}</p>
            <div className="flex flex-col gap-3 items-center flex-wrap max-h-60">
                {history.map((_, index) => {
                    if (index === 0) return
                    return <button
                    className="bg-[#3B76F6] px-4 py-1 text-lg text-white rounded-lg"
                        onClick={() => setCurrentMove(index)}
                        key={index}
                    >{t("move")} {index}</button>
                })}
            </div>
        </div>
    </>)
}

export default History