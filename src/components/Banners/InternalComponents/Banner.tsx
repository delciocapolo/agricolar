import styled from "@emotion/styled";
import { FC } from "react";
import { IBanner } from "./@types/base";
import { ArrowRight } from "lucide-react";

const BannerContainer = styled['div']`
    position: relative;

    height: fit-content;
    // background-color: purple;
    border-radius: var(--border-radius);
    
    flex: 1 1 153px;
`;

const ImageBase = styled['img']`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
`;

const TextBase = styled['h1']`
    font: var(--Heading05-600);
    color: var(--White);
    font-size: 1.4rem;
`;

const DescriptionBase = styled(TextBase)`
    font: var(--Body-Tiny-400);
`;

const ContentBase = styled['div']`
    content: '';
    position: absolute;
    flex-direction: column;
    gap: 25px;
    
    width: 100%;
    padding: 0 20px;

    align-items: flex-start;
    // background-color: brown;
`;

const ContentBaseText = styled['div']`
    // background-color: red;
    width: 55%;
    justify-content: flex-start;
    gap: 3px;
`;

const Link = styled['a']`
    padding: 5px 20px;
    background-color: var(--White);
    color: var(--Success);
    width: 51%;
    min-width: 182px;
    height: 40px;
    gap: 0;
    border-radius: 55px;
    font: var(--Body-Small-500);
`;

export const BannerMilk: FC<IBanner> = ({ image, info = '100% leite fresco de vaca', description = { price: '150', text: 'a partir de' } }) => {

    return (
        <BannerContainer className="d-flex">
            <ImageBase src={image?.path} />
            <ContentBase className="d-flex">
                <ContentBaseText className="d-flex">
                    <TextBase>{info}</TextBase>
                    <DescriptionBase>{description?.text} {description?.price && (<b>{description.price} kz</b>)}</DescriptionBase>
                </ContentBaseText>

                <Link href="#" target="_self" className="d-flex">
                    Compre agora <ArrowRight />
                </Link>
            </ContentBase>
        </BannerContainer>
    )
};

export const BannerDrink: FC<IBanner> = ({ image, description = { text: 'venda de sumo natural' }, info = 'água e cocktail' }) => {
    const Content = styled(ContentBase)`
        align-items: flex-end;
        & > div > h1 {
            color: var(--Green-900);
        }
        & > div {
            justify-content: flex-end;
        }
    `;

    return (
        <BannerContainer className="d-flex">
            <ImageBase src={image?.path} />
            <Content className="d-flex">
                <ContentBaseText className="d-flex">
                    <DescriptionBase>{description?.text} {description?.price && (<b>{description.price}</b>)}</DescriptionBase>
                    <TextBase>{info}</TextBase>
                </ContentBaseText>

                <Link href="#" target="_self" className="d-flex">
                    Compre agora <ArrowRight />
                </Link>
            </Content>
        </BannerContainer>
    );
};

export const BannerOrganic: FC<IBanner> = ({ image, description = { text: '100% orgânico' }, info = 'um pequeno-almoço rápido' }) => {
    const Content = styled(ContentBase)`
        & > div > h1 {
            color: var(--Green-900);
        }
    `;

    return (
        <BannerContainer className="d-flex">
            <ImageBase src={image?.path} />
            <Content className="d-flex">
                <ContentBaseText className="d-flex">
                    <DescriptionBase>{description?.text} {description?.price && (<b>{description.price}</b>)}</DescriptionBase>
                    <TextBase>{info}</TextBase>
                </ContentBaseText>

                <Link href="#" target="_self" className="d-flex">
                    Compre agora <ArrowRight />
                </Link>
            </Content>
        </BannerContainer>
    );
};
