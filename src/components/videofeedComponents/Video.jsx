/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import { VideoFeedContext } from "../../context/VideoFeedProvider"
import { I18nContext } from "../../context/i18nProvider"

function Video({ url }) {
    const urlRef = useRef(url)
    const [playing, setPlaying] = useState(false)
    const [playbackRate, setPlaybackRate] = useState(1)
    const { t } = useContext(I18nContext)
    const { currentVideo, setCurrentVideo } = useContext(VideoFeedContext)

    useEffect(() => {
        if (currentVideo !== null && currentVideo !== urlRef.current) {
            setPlaying(false)
        }
    }, [currentVideo])

    function playHandler() {
        setPlaying(!playing)
        setCurrentVideo(urlRef.current)
    }

    return (
        <div>
            <div className="w-[calc(80vw)] overflow-hidden">
                <ReactPlayer url={url}
                    playing={playing}
                    playbackRate={playbackRate}
                    controls={false} />
            </div>
            <div className="w-full flex justify-between p-2 bg-[#EFF4FF]">
                <button
                    className={`${playing ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'} outline py-2 px-4 rounded-lg `}
                    onClick={playHandler}>{playing ? t("pause") : t("play")}</button>
                <div className="flex gap-2">
                    <button className={`${playbackRate === 1 ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'} outline outline-blue-500 py-2 px-4 rounded-lg`}
                        onClick={() => setPlaybackRate(1)}>x1</button>
                    <button className={`${playbackRate === 1.5 ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'} outline outline-blue-500 py-2 px-4 rounded-lg`}
                        onClick={() => setPlaybackRate(1.5)}>x1.5</button>
                    <button className={`${playbackRate === 2 ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'} outline outline-blue-500 py-2 px-4 rounded-lg`}
                        onClick={() => setPlaybackRate(2)}>x2</button>
                </div>
            </div>
        </div>
    )
}

export default Video