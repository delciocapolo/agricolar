import { MouseEvent, useRef } from "react";
import styled from "@emotion/styled";
import { Container as ContainerBase } from "../Container/Container";
import Card from "./InternalComponents/Card";
import Video from "./InternalComponents/Video";
import { Play } from "lucide-react";
import { ButtonPlayPause, SubTitleVideoDescribe, TitleVideoDescribe, VideoDescribeContainer, VideoDescribeSubContainer } from "./InternalComponents/VideoComponents";

import imageCostumer1 from "../../assets/costumers/costumer1.jpg";
import imageCostumer2 from "../../assets/costumers/costumer2.jpg";
import imageCostumer3 from "../../assets/costumers/costumer3.jpg";

export const minHeightBase = '650px';
const Testimonies = () => {
    const TestimonieContainer = styled['div']`
        width: 100%;
        background-color: var(--Green-50);
        padding: 4.5rem 0;
        min-height: ${minHeightBase};
        
        & > div {
            display: block;
            min-height: calc(${minHeightBase} / 2);
        }
    `;
    const Container = styled(ContainerBase)`
        margin: auto;
        padding: 0;
    `;
    const ContainerRelative = styled(ContainerBase)`
        position: relative;
        margin: auto;
        padding: 0;
        min-height: 379px !important;
    `;
    const SubContainerrelative = styled(ContainerRelative)`
        width: 100%;
        min-height: 681px;
        position: absolute;

        top: 25%;
    `;

    const Title = styled['h1']`
        font: var(--Heading05-600);
        color: var(--Green-900);
        text-align: left;
        padding: 1.7rem 0;
    `;
    const CommentContainer = styled['div']`
        width: 100%;
        pading: 0;
        
        & > div {
            flex: 1 1 303px;
        }
    `;

    const videoPlayRef = useRef<HTMLVideoElement>(null);
    const videoDescribeContainerRef = useRef<HTMLDivElement>(null);

    const handleClickPlayVideo = async (_: MouseEvent<HTMLButtonElement>) => {
        if (videoPlayRef.current) {
            if (videoPlayRef.current.paused) {
                if (videoDescribeContainerRef.current) {
                    videoDescribeContainerRef.current.classList.add('d-none');
                }
                videoPlayRef.current.controls = true;
                videoPlayRef.current.play();
            }
        }
    }

    return (
        <TestimonieContainer>
            <Container>
                <Title>o que nossos clientes dizem</Title>
                <CommentContainer className="d-flex">
                    <Card image={{ path: imageCostumer1 }} />
                    <Card image={{ path: imageCostumer3 }} />
                    <Card image={{ path: imageCostumer2 }} />
                </CommentContainer>
            </Container>
            <ContainerRelative>
                <SubContainerrelative className="d-flex">
                    <Video forwarededRef={videoPlayRef} />
                    <VideoDescribeContainer className="d-flex" ref={videoDescribeContainerRef}>
                        <VideoDescribeSubContainer>
                            <SubTitleVideoDescribe>video</SubTitleVideoDescribe>
                            <TitleVideoDescribe>somos a melhor fazenda orgânica em angola</TitleVideoDescribe>
                        </VideoDescribeSubContainer>
                        <ButtonPlayPause type="button" className="d-flex" onClick={handleClickPlayVideo}>
                            <Play className="icon-play-svg" />
                        </ButtonPlayPause>
                    </VideoDescribeContainer>
                </SubContainerrelative>
            </ContainerRelative>
        </TestimonieContainer>
    )
};

export default Testimonies;
