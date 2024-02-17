import { useContext, useId, useState } from "react"
import { VideoFeedContext } from "../../context/VideoFeedProvider"
import { I18nContext } from "../../context/i18nProvider"

function Search() {

    const formId = useId()
    const {t} = useContext(I18nContext)
    const [searchValue, setSearchValue] = useState("")
    const { addVideoQueueList } = useContext(VideoFeedContext)

    function submitHandler(e) {
        e.preventDefault()
        addVideoQueueList(searchValue)
        setSearchValue("")
    }

    return (<>
        <form onSubmit={submitHandler} className="flex flex-col gap-2 max-w-lg mx-auto mt-10 items-center">
            <label htmlFor={formId} className="font-semibold">Youtube URL</label>
            <input id={formId}
                className="w-full h-10 px-2 rounded-md"
                type="url"
                placeholder="https://www.youtube.com/watch?v=5miHyP6lExg&t=3359s"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <button type="submit" className="bg-blue-500 p-2 text-white rounded-md">{t("add-video")}</button>
        </form>
    </>)
}

export default Search