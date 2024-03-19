import { Global, css } from "@emotion/react";
import imagePopup from "../../assets/newsletterpopup/newsletterpopup.jpg";
import { X } from "lucide-react";
import { useRef, useLayoutEffect, ChangeEvent } from "react";

import {
    NewsletterPopupContainer,
    ButtonCloseNewsletterPopup,
    ContainerButtonCloseNewsletterPopup,
    ContainerImageNewsletterPopup,
    ContainerMessageNewsLetterPopup,
    ContentNewsletterPopup,
    EmailNewsletterComponent,
    ImageNewsletterPopup,
    SubContainerMessageNewsLetterPopup,
    TextNewsletterPopup,
    TitleNewsletterPopup
} from "./ComponentBase/ComponentBase";

const NewsletterPopup = () => {
    const NewsletterPopupContainerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

    const handleCLickButtonDontShowAgain = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const dateExpires = new Date();
            dateExpires.setTime(dateExpires.getTime() + (60 * 60 * 24 * 365));
            document.cookie = `newsletterpopup: false; Secure; path=/; SameSite=lax; expires=${dateExpires.toUTCString()}`;
        }
    }

    const handleClickButtonCloseNewsletterPopup = () => {
        if (NewsletterPopupContainerRef.current) {
            NewsletterPopupContainerRef.current.classList.add('d-none');
        }
    };

    useLayoutEffect(() => {
        const cookies = document.cookie.split('; ');
        const data = cookies.find((cookie) => cookie.startsWith('newsletterpopup'));

        if (data) {
            if (NewsletterPopupContainerRef.current) {
                NewsletterPopupContainerRef.current.classList.add('d-none');
            }
        }
    }, []);

    return (
        <NewsletterPopupContainer className="d-flex" ref={NewsletterPopupContainerRef}>
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
                            <input type="checkbox" onChange={handleCLickButtonDontShowAgain} />
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
