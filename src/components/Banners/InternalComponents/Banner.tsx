import styled from "@emotion/styled";
import { FC } from "react";


const Banner: FC<{ float?: 'left' | 'right', image?: { path: string, describe?: string } }> = ({ float, image }) => {
    const BannerContainer = styled['div']`
        position: relative;

        height: 225px;
        background-color: purple;
        border-radius: var(--border-radius);
        
        flex: 1 1 153px;
    `;
    const Image = styled['img']`
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
    `;
    const TextBase = styled['h1']`
        font: var(--Display05-600);
        color: var(--White);
    `;
    const Description = styled(TextBase)`

    `;
    const Content = styled['div']`
        position: absolute;
    `;

    return (
        <BannerContainer className="d-flex">
            <Image src={image?.path} />
            <Content className="d-flex">
                <Content className="d-flex">
                    <TextBase>100% leite fresco de vaca</TextBase>
                    <Description></Description>
                </Content>
            </Content>
        </BannerContainer>
    )
};

export default Banner;