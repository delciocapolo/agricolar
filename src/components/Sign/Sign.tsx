import { Facebook, X } from "lucide-react";
import { ButtonClearTextField, ButtonClose, ButtonShowHelp, ButtonSubmitUserInputs, Container, ContainerAccounts, ContainerAccountsLinks, ContainerInput, ContainerLine, ContainerLinkAccount, ContainerMessageEasyAccess, ContainerUserInputs, ContentLinkAccount, ContentTitle, LinkAccount, MessageEasyAccess, PainelSign, SubContentLinkAccount, TextField, Title } from "./ComponentBase/ComponentBase"
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";

const SignComponent = () => {
    const [controllStep, _] = useState<number>(0);
    const [contentTextfiled, setContentTextField] = useState<string>('');
    const ContainerSignComponent = useRef<HTMLDivElement | null>({} as HTMLDivElement);

    const handleContentTextField = (e: ChangeEvent<HTMLInputElement>) => {
        setContentTextField(e.target.value);
    }
    const handleButtonCleartextField = () => {
        setContentTextField('');
    }
    const handleCloseContainerSignComponent = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        if (ContainerSignComponent.current) {
            ContainerSignComponent.current.classList.add('d-none');
        }
    }

    return (
        <Container className="d-flex" ref={ContainerSignComponent} onClick={handleCloseContainerSignComponent}>
            <PainelSign onClick={(e) => {
                e.stopPropagation();
            }}>
                <ButtonClose className="d-flex" onClick={handleCloseContainerSignComponent}>
                    <X className="btnclose-svg-icon" size={21} />
                </ButtonClose>
                <ContentTitle className="d-flex">
                    <Title>Cadastre-se/Entre</Title>
                </ContentTitle>
                <ContainerAccounts>
                    <ContainerUserInputs className="d-flex">
                        <ContainerInput className="d-flex">
                            <TextField
                                name="email"
                                type="email"
                                placeholder="email"
                                onChange={handleContentTextField}
                                value={contentTextfiled}
                            />
                            {
                                contentTextfiled && (
                                    <ButtonClearTextField className="d-flex" onClick={handleButtonCleartextField}>
                                        <X className="btnclose-svg-icon" size={12} />
                                    </ButtonClearTextField>
                                )
                            }
                        </ContainerInput>
                        <ButtonSubmitUserInputs type="submit" className="d-flex">continuar</ButtonSubmitUserInputs>
                        <ButtonShowHelp>Problemas ao acessar a conta?</ButtonShowHelp>
                    </ContainerUserInputs>
                    {
                        controllStep === 0 ? (
                            <ContainerAccountsLinks className="d-flex">
                                <ContainerMessageEasyAccess className="d-flex">
                                    <ContainerLine />
                                    <MessageEasyAccess>acesso rápido com</MessageEasyAccess>
                                    <ContainerLine />
                                </ContainerMessageEasyAccess>
                                <ContainerLinkAccount>
                                    <LinkAccount className="d-flex" href="#">
                                        <SubContentLinkAccount className="d-flex">
                                            <FaGoogle className="linkaccount-icon-svg" />
                                        </SubContentLinkAccount>
                                        <ContentLinkAccount>google</ContentLinkAccount>
                                    </LinkAccount>
                                    <LinkAccount className="d-flex" href="#">
                                        <SubContentLinkAccount className="d-flex">
                                            <Facebook className="linkaccount-icon-svg" />
                                        </SubContentLinkAccount>
                                        <ContentLinkAccount>Facebook</ContentLinkAccount>
                                    </LinkAccount>
                                    <LinkAccount className="d-flex" href="#">
                                        <SubContentLinkAccount className="d-flex">
                                            <Facebook className="linkaccount-icon-svg" />
                                        </SubContentLinkAccount>
                                        <ContentLinkAccount>Facebook</ContentLinkAccount>
                                    </LinkAccount>
                                </ContainerLinkAccount>
                            </ContainerAccountsLinks>
                        ) : null
                    }
                </ContainerAccounts>
            </PainelSign>
        </Container>
    )
};

export default SignComponent;