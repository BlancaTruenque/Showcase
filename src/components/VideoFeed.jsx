import VideoFeedProvider from "../context/VideoFeedProvider"
import ListVideo from "./videofeedComponents/ListVideo"
import Search from "./videofeedComponents/Search"

function VideoFeed() {
    return (<>
        <VideoFeedProvider>
            <Search />
            <ListVideo />
        </VideoFeedProvider>
    </>)
}

export default VideoFeed