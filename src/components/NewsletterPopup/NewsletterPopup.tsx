import styled from "@emotion/styled"
import { Global, css } from "@emotion/react";
import imagePopup from "../../assets/newsletterpopup/newsletterpopup.jpg";
import { EmailNewsletterComponent as EmailNewsletterComponentBase } from "../Footer/InternalComponents/Newsletter";
import { X } from "lucide-react";
import { MouseEvent } from "react";

const NewsletterPopup = () => {
    const NewsletterPopupContainer = styled['div']`
        position: fixed;
        width: 100%;
        height: 100%;

        background-color: rgba(51, 51, 51, 0.4);
        backdrop-filter: blur(14px);

        top: 0;
        z-index: 500;
    `;
    const ContentNewsletterPopup = styled['div']`
        width: 55%;
        min-width: 265px;
        min-height: 320px;
        gap: 10px;
        background-color: var(--White);
        border-radius: var(--border-radius);
        padding: 10px;

        justify-content: space-between;
    `;
    const ContainerImageNewsletterPopup = styled['div']`
        width: 35%;
        height: 100%;
    `;
    const ImageNewsletterPopup = styled['img']`
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
    `;
    const ContainerMessageNewsLetterPopup = styled['div']`
        width: 63%;
        height: 100%;
        // background-color: red;
    `;
    const SubContainerMessageNewsLetterPopup = styled['div']`
        text-align: center;
        gap: 7px;
    `;
    const TitleNewsletterPopup = styled['h1']`
        line-height: 1.2;
        text-transform: none;

        font: 1.8rem 'Poppins-semi-bold';
        width: 65%;
        // background-color: red;
        margin: auto;
    `;
    const TextNewsletterPopup = styled['p']`
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
    const EmailNewsletterComponent = styled(EmailNewsletterComponentBase)`
        & > form {
            box-shadow: var(--box-shadow-double-face);
        }
    `;
    const ContainerButtonCloseNewsletterPopup = styled['div']`
        width: 100%;
        justify-content: flex-end;  
    `;
    const ButtonCloseNewsletterPopup = styled['button']`
        padding: 8px;
        background-color: transparent;

        border-radius: var(--border-radius);
        & > .icon-x-buttonclose-svg {
            color: var(--Gray-800);
        }
    `;
    const handleClickButtonCloseNewsletterPopup = (e: MouseEvent<HTMLButtonElement>) => {
        document.cookie = '{newsletterpopup: false}; Secure; path=/; SameSite=lax; expires=60*60*24*365'
    }

    return (
        <NewsletterPopupContainer className="d-flex">
            <Global styles={css`
                .email-newsletter-component {
                    padding: 1.5rem 0;
                    align-items: center !important;
                    flex-direction: row !important;
                    // background-color: yellow;
                }

                .custom-checkbox {
                  cursor:pointer;
                  display:flex;
                  align-items:center;
                  margin:auto;
                  width: fit-content;
                }
                
                .custom-checkbox .label {
                  font: var(--Body-Small-400);
                //   margin: 5px 0;
                  text-transform: none;
                }
                
                .custom-checkbox .checkmark {
                  width: 17px;
                  height: 17px;
                  border: 1px solid var(--Success);
                  display: inline-block;
                  border-radius: 3px;
                  background: var(--Success) url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png) center/1250% no-repeat;
                  transition: background-size 0.2s ease;
                }
                
                .custom-checkbox input:checked + .checkmark {
                  background-size: 60%;
                  transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
                }
                
                .custom-checkbox input {
                  display: none;
                }
            `} />

            <ContentNewsletterPopup className="d-flex">

                <ContainerImageNewsletterPopup className="d-flex container-image-newsletterpopup">
                    <ImageNewsletterPopup src={imagePopup} alt="" />
                </ContainerImageNewsletterPopup>

                <ContainerMessageNewsLetterPopup className="container-message-newsLetterpopup">
                    <ContainerButtonCloseNewsletterPopup className="d-flex">
                        <ButtonCloseNewsletterPopup type="button" className="d-flex" onClick={handleClickButtonCloseNewsletterPopup}>
                            <X className="icon-x-buttonclose-svg" size={20} />
                        </ButtonCloseNewsletterPopup>
                    </ContainerButtonCloseNewsletterPopup>

                    <SubContainerMessageNewsLetterPopup>
                        <TitleNewsletterPopup>Subscreva à nossa newsletter</TitleNewsletterPopup>
                        <TextNewsletterPopup>Subscreva à nossa newsletter e salve os teus <span>20% no dinheiro</span> com o código de desconto de hoje</TextNewsletterPopup>
                    </SubContainerMessageNewsLetterPopup>

                    <EmailNewsletterComponent className="email-newsletter-component" />

                    <div className="check-box-group">
                        <label className="custom-checkbox d-flex" tab-index="0" aria-label="Another Label">
                            <input type="checkbox" onChange={() => { console.log('Mudado o btn dont show again') }} />
                            <span className="checkmark"></span>
                            <span className="label">Não mostrar novamente</span>
                        </label>
                    </div>
                </ContainerMessageNewsLetterPopup>
            </ContentNewsletterPopup>
        </NewsletterPopupContainer>
    )
};

export default NewsletterPopup;
