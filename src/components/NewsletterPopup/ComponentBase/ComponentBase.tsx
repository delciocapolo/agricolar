import styled from "@emotion/styled";
import { EmailNewsletterComponent as EmailNewsletterComponentBase } from "../../Footer/InternalComponents/Newsletter";

export const NewsletterPopupContainer = styled['div']`
        position: fixed;
        width: 100%;
        height: 100%;

        background-color: rgba(51, 51, 51, 0.4);
        backdrop-filter: blur(14px);

        top: 0;
        z-index: 500;
    `;
export const ContentNewsletterPopup = styled['div']`
        width: 55%;
        min-width: 265px;
        min-height: 320px;
        gap: 10px;
        background-color: var(--White);
        border-radius: var(--border-radius);
        padding: 10px;

        justify-content: space-between;
        position: relative;
    `;
export const ContainerImageNewsletterPopup = styled['div']`
        width: 35%;
        height: 100%;
    `;
export const ImageNewsletterPopup = styled['img']`
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
    `;
export const ContainerMessageNewsLetterPopup = styled['div']`
        width: 63%;
        height: 100%;
        // background-color: red;
    `;
export const SubContainerMessageNewsLetterPopup = styled['div']`
        text-align: center;
        gap: 7px;
    `;
export const TitleNewsletterPopup = styled['h1']`
        line-height: 1.2;
        text-transform: none;

        font: 1.8rem 'Poppins-semi-bold';
        width: 65%;
        // background-color: red;
        margin: auto;
    `;
export const TextNewsletterPopup = styled['p']`
        font: var(--Body-Small-400);
        color: var(--Gray-300);
        text-transform: none;
        width: 75%;
        margin: auto;

        & > span {
            font-weight: 600;
            color: var(--Warning);
            text-transform: none;
        }
    `;
export const EmailNewsletterComponent = styled(EmailNewsletterComponentBase)`
        & > form {
            box-shadow: var(--box-shadow-double-face);
        }
    `;
export const ContainerButtonCloseNewsletterPopup = styled['div']`
        width: fit-content;
        justify-content: flex-end;
        position: absolute;
        right: 0;
        top: 0;
    `;
export const ButtonCloseNewsletterPopup = styled['button']`
        padding: 8px;
        background-color: transparent;

        border-radius: var(--border-radius);
        & > .icon-x-buttonclose-svg {
            color: var(--Gray-800);
        }
    `;