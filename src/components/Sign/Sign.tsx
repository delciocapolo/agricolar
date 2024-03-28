import { X } from "lucide-react";
import { ButtonClearTextField, ButtonClose, ButtonShowHelp, ButtonSubmitUserInputs, Container, ContainerAccounts, ContainerAccountsLinks, ContainerInput, ContainerLine, ContainerMessageEasyAccess, ContainerUserInputs, ContentTitle, MessageEasyAccess, PainelSign, TextField, Title } from "./ComponentBase/ComponentBase"
import { ChangeEvent, MouseEvent, useState } from "react";

const SignComponent = () => {
    const [controllStep, setControllStep] = useState<number>(0);
    const [contentTextfiled, setContentTextField] = useState<string>('');

    const handleContentTextField = (e: ChangeEvent<HTMLInputElement>) => {
        setContentTextField(e.target.value);
    }
    const handleButtonCleartextField = () => {
        setContentTextField('');
    }

    return (
        <Container className="d-flex">
            <PainelSign>
                <ButtonClose className="d-flex">
                    <X className="btnclose-svg-icon" size={21} />
                </ButtonClose>
                <ContentTitle className="d-flex">
                    <Title>cadastre-se/entre</Title>
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
                                        <X className="btnclose-svg-icon" size={21} />
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
                            </ContainerAccountsLinks>
                        ) : null
                    }
                </ContainerAccounts>
            </PainelSign>
        </Container>
    )
};

export default SignComponent;