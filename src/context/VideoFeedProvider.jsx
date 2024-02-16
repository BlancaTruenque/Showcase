/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const VideoFeedContext = createContext()

function VideoFeedProvider({ children }) {

    const [queueList, setQueueList] = useLocalStorage("queueList", [])
    const [currentVideo, setCurrentVideo] = useState(null)

    function addVideoQueueList(url) {
        setQueueList([...queueList, url])
    }

    return (<VideoFeedContext.Provider value={{
        queueList,
        currentVideo,
        addVideoQueueList,
        setCurrentVideo
    }}>
        {children}
    </VideoFeedContext.Provider>)
}

export default VideoFeedProvider
