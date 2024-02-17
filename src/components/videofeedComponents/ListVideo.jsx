import { useContext } from "react"
import { VideoFeedContext } from "../../context/VideoFeedProvider"
import Video from "./Video"

function ListVideo() {

    const { queueList } = useContext(VideoFeedContext)

    return (<>
        <div className="max-w-4xl mx-auto flex flex-col-reverse gap-10 items-center mt-10">
            {queueList.map((url, index) => {
                return <Video key={"video-"+index} url={url}/>
            })}
        </div>
    </>)
}

export default ListVideo