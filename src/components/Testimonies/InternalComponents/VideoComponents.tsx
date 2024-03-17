import styled from "@emotion/styled";

export const VideoDescribeContainer = styled['div']`
    position: absolute;
    flex-direction: column;
`;
export const VideoDescribeSubContainer = styled['div']`
    & > * {
        display: block;

        // background-color: red;
        text-align: center;
        max-width: 495px;
        color: var(--White);
    }
`;
export const SubTitleVideoDescribe = styled['span']`
    font: 1rem 'Segoe-script';
    letter-spacing: 2px;
`;
export const TitleVideoDescribe = styled['h1']`
    font: var(--Heading04-400);
    font-size: 2rem;
`;
export const ButtonPlayPause = styled['button']`
    width: 65px;
    height: 65px;
    border-radius: 50px;
    background-color: transparent;
    border: 1.5px solid var(--White);


    & > .icon-play-svg {
        stroke: none;
        fill: var(--White);
    }
`;