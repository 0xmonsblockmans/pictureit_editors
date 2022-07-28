import React from "react"
import { Block } from "baseui/block"
import ReactPlayer from "react-player"

function VideoPreview({ src }: { src: string }) {
  return (
    <Block style={{ display: "flex" }}>
      <ReactPlayer muted={false} className="react-player" width={"100%"} height={"100%"} controls autoPlay url={src} />
    </Block>
  )
}

export default VideoPreview
