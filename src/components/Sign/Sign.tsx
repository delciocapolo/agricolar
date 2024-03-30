import { ChevronDown, ChevronLeft, Facebook, X } from "lucide-react";
import {
    ButtonClose,
    ButtonShowHelp,
    ButtonSubmitUserInputs,
    Container,
    ContainerAccounts,
    ContainerAccountsLinks,
    ContainerButton,
    ContainerInput,
    ContainerLine,
    ContainerLinkAccount,
    ContainerMessageEasyAccess,
    ContainerUserInputs,
    ContainerUserTypeList,
    ContentLinkAccount,
    ContentTitle,
    ItemUserType,
    LinkAccount,
    MessageEasyAccess,
    PainelSign, SubContentLinkAccount,
    TextField,
    Title,
    TitleUserType
} from "./ComponentBase/ComponentBase"
import React, { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import ButtonClearTextFieldSignForm from "./ComponentBase/TextFieldSignForm";
import axios from "axios";

interface IBaseFormKeys {
    name: string;
    email: string;
    password: string;
    phone: string;
    gender: 'male' | 'female';
    born: Date | string;
    pathImage: string;
    location: string;

    typeUser: 'costumer' | 'farmer';
}

const SignComponent = () => {
    const [controllStep, _] = useState<number>(0);
    const [contentTextfiled, setContentTextField] = useState<string>('');
    const [contentTextfiledNIF, setContentTextfiledNIF] = useState<string>('');
    const [formValues, setFormValues] = useState<IBaseFormKeys>({} as IBaseFormKeys);

    // todas referencias neste componente
    const ContainerSignComponent = useRef<HTMLDivElement | null>({} as HTMLDivElement);
    const ContainerUserTypeListRef = useRef<HTMLUListElement | null>({} as HTMLUListElement);
    const TitleUserTypeRef = useRef<HTMLHeadingElement | null>({} as HTMLHeadingElement);

    const handleContentTextField = (e: ChangeEvent<HTMLInputElement>) => {
        setContentTextField(e.target.value);
    }
    const handleContentTextFieldNIF = (e: ChangeEvent<HTMLInputElement>) => {
        setContentTextfiledNIF(e.target.value);
    }
    const handleCloseContainerSignComponent = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        if (ContainerSignComponent.current) {
            ContainerSignComponent.current.classList.add('d-none');
        }
    }

    const handleButtonSubmitUserInputs = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        // pensando em sanitizar, verificar e enviar os dados pro servidor

        // bi: https://digital.ao/ao/actions/bi.ajcall.php?bi=xxxxxxxxxxxx
        // nif: https://digital.ao/ao/actions/nif.ajcall.php?nif=xxxxxxxxxxxx
        if (formValues.typeUser === 'farmer') {
            const { data } = await axios.get('http://localhost:4001/bi/010278995LA047');
            console.log(data);
        }
    }

    // 
    const handleItemUserType = (e: MouseEvent<HTMLLIElement>) => {
        const userType = e.currentTarget.dataset['type'];
        const textUserType = e.currentTarget.textContent;
        const UserTypeChoise = userType as 'costumer' | 'farmer';

        if (TitleUserTypeRef.current) {
            TitleUserTypeRef.current.textContent = textUserType;
            setFormValues({ ...formValues, typeUser: UserTypeChoise });
        }
    }

    const handleStepContainerAccount = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <React.Fragment>
                        <ContainerUserInputs className="d-flex" method="post" action="/createuser">
                            <ContainerInput className="d-flex" onClick={(e) => {
                                e.stopPropagation();
                                if (ContainerUserTypeListRef.current) {
                                    ContainerUserTypeListRef.current.classList.toggle('actived');
                                }
                            }}>
                                <TitleUserType className="d-flex" ref={TitleUserTypeRef}>
                                    escolha o que te representa
                                    <ChevronDown />
                                </TitleUserType>
                                <ContainerUserTypeList className="user-type-list" ref={ContainerUserTypeListRef}>
                                    <ItemUserType data-type="costumer" onClick={handleItemUserType}>Consumidor</ItemUserType>
                                    <ItemUserType data-type="farmer" onClick={handleItemUserType}>Fazendeiro</ItemUserType>
                                </ContainerUserTypeList>
                            </ContainerInput>
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
                                        <ButtonClearTextFieldSignForm dispatch={setContentTextField} />
                                    )
                                }
                            </ContainerInput>
                            {
                                formValues.typeUser === 'farmer' ? (
                                    <ContainerInput className="d-flex">
                                        <TextField
                                            name="nif"
                                            type="text"
                                            placeholder="NIF"
                                            onChange={handleContentTextFieldNIF}
                                            value={contentTextfiledNIF}
                                        />
                                        {
                                            contentTextfiledNIF && (
                                                <ButtonClearTextFieldSignForm dispatch={setContentTextfiledNIF} />
                                            )
                                        }
                                    </ContainerInput>
                                ) : null
                            }
                            <ButtonSubmitUserInputs type="submit" className="d-flex" onClick={handleButtonSubmitUserInputs}>continuar</ButtonSubmitUserInputs>
                            <ButtonShowHelp type="button">Problemas ao acessar a conta?</ButtonShowHelp>
                        </ContainerUserInputs>
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
                    </React.Fragment>
                );

            default:
                return <></>;
        }
    }

    return (
        <Container className="d-flex d-none" id="sign-container" ref={ContainerSignComponent} onClick={handleCloseContainerSignComponent}>
            <PainelSign onClick={(e) => {
                e.stopPropagation();
            }}>
                <ContainerButton className="d-flex">
                    {
                        controllStep > 0 ? (
                            <ButtonClose data-name="button-come-back-sign-process" className="d-flex" onClick={undefined}>
                                <ChevronLeft className="btnclose-svg-icon" size={15} />
                            </ButtonClose>
                        ) : null
                    }
                    <ButtonClose data-name="button-close-sign" className="d-flex" onClick={handleCloseContainerSignComponent}>
                        <X className="btnclose-svg-icon" size={15} />
                    </ButtonClose>
                </ContainerButton>
                <ContentTitle className="d-flex">
                    <Title>Cadastre-se | Entre</Title>
                </ContentTitle>
                <ContainerAccounts>
                    {
                        handleStepContainerAccount(controllStep)
                    }
                </ContainerAccounts>
            </PainelSign>
        </Container>
    )
};

export default SignComponent;