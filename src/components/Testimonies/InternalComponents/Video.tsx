import styled from "@emotion/styled";
import thumbnailVideo from "../../../assets/containers/thumbnailVideo.jpg"
import video from "../../../assets/videos/first.mp4"
import { FC, RefObject } from "react";

interface IVideo {
    forwarededRef: RefObject<HTMLVideoElement>
}

const VideoContainer = styled['video']`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

const Video: FC<IVideo> = ({ forwarededRef }) => {

    return (
        <VideoContainer preload="auto" poster={thumbnailVideo} role="button" ref={forwarededRef}>
            <source src={video} />
            Desculpa, o seu navegador não suporta vídeos incorporados, mas você pode
            <a href={video}>baixá-lo</a>
            e assistir pelo seu reprodutor de mídia favorito!
        </VideoContainer>
    )
};

export default Video;