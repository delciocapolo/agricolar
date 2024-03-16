import styled from "@emotion/styled";
import thumbnailVideo from "../../../assets/containers/thumbnailVideo.jpg"
import video from "../../../assets/videos/first.mp4"

const VideoContainer = styled['video']`
    width: 100%;
    height: 100%;
    min-height: 681px;
    border-radius: 20px;
`;

const Video = () => {
    return (
        <VideoContainer preload="none" poster={thumbnailVideo}>
            <source src={video} />
            Desculpa, o seu navegador não suporta vídeos incorporados, mas você pode
            <a href={video}>baixá-lo</a>
            e assistir pelo seu reprodutor de mídia favorito!
        </VideoContainer>
    )
};

export default Video;