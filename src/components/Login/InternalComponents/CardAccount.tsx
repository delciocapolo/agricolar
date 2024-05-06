import { Facebook02Icon } from "hugeicons-react";
import styled from "styled-components";
import { FC, JSX } from "react";

const CardLinkAccountContainer = styled['a']`
    // flex: 1 1 95px;
    width: 100%;
    border: 2px solid var(--Green-700);
    border-radius: var(--border-radius);
    gap: 0;
    background-color: var(--Green-50);
`;

const ContentLinkAccount = styled['span']`
    font: var(--Body-Small-400);
    color: var(--Green-700);
    position: absolute;
    left: 33%;
`;
const BaseContainer = styled['div']`
    padding: 13px 0;
    border-radius: var(--border-radius);
`;
const ContainerIcon = styled(BaseContainer)`
    flex: 1 1 15px;
`;
const ContainerContent = styled(BaseContainer)`
    flex: 10 1 fit-content;
    position: relative;
`;

interface ICardLinkAccountComponent {
    url: string;
    icon: JSX.Element;
    content: string;
}

const CardLinkAccountComponent: FC<ICardLinkAccountComponent> = ({ url, content, icon }) => {
    return (
        <CardLinkAccountContainer className="d-flex" href={url}>
            <ContainerIcon className="d-flex">
                {
                    icon
                }
            </ContainerIcon>
            <ContainerContent className="d-flex">
                <ContentLinkAccount>{content}</ContentLinkAccount>
            </ContainerContent>
        </CardLinkAccountContainer>
    )
};

export default CardLinkAccountComponent;