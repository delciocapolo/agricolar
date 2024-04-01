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
import React, { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import ButtonClearTextFieldSignForm from "./ComponentBase/TextFieldSignForm";
import { z } from "zod";
import { validateSchema } from "./utils/validateSchema";
import TextFieldFarmerOnly from "./ComponentBase/TextFieldFarmerOnly";

type IBaseFormKeys = z.infer<typeof validateSchema>;
const BASE_URL = 'http://localhost:3401';

const SignComponent = () => {
    const [controllStep, _] = useState<number>(0);
    const [contentTextFieldEmail, setContentTextField] = useState<string>('');
    const [contentTextFieldNIF, setContentTextFieldNIF] = useState<string>('');
    const [contentTextFieldPhone, setContentTextFieldPhone] = useState<string>('');
    const [contentTextFieldPassword, setContentTextFieldPassword] = useState<string>('');
    const [contentTextFieldConfirmPassword, setContentTextFieldConfirmPassword] = useState<string>('');
    const [typeUser, setTypeUser] = useState<"farmer" | "costumer" | null>(null);

    // todas referencias neste componente
    const ContainerSignComponent = useRef<HTMLDivElement | null>({} as HTMLDivElement);
    const ContainerUserTypeListRef = useRef<HTMLUListElement | null>({} as HTMLUListElement);
    const TitleUserTypeRef = useRef<HTMLHeadingElement | null>({} as HTMLHeadingElement);

    const handleContentChangeInput = (e: ChangeEvent<HTMLInputElement>, callback: Dispatch<SetStateAction<any>>) => {
        callback(e.target.value);
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

        // bi: https://digital.ao/ao/actions/bi.ajcall.php?bi=xxxxxxxxxxxx
        // nif: https://digital.ao/ao/actions/nif.ajcall.php?nif=xxxxxxxxxxxx
        // IP: https://api.ipgeolocation.io/getip

        if (typeUser === 'farmer') {
            const [BIDataFech, IPDataFetch] = await Promise.all([
                fetch(`http://localhost:4001/bi/${contentTextFieldNIF}`),
                fetch('https://api.ipgeolocation.io/getip'),
            ]).then((res) => res.map((data) => data.json()))

            const { data } = await BIDataFech;
            const { ip } = await IPDataFetch;

            if (data) {
                const updatedFormValues: IBaseFormKeys = {
                    email: contentTextFieldEmail,
                    phone: parseInt(contentTextFieldPhone),
                    nif: contentTextFieldNIF,
                    password: contentTextFieldPassword,
                    confirmPassword: contentTextFieldConfirmPassword,
                    ip
                };

                // Valide o esquema
                if (!validateSchema.safeParse(updatedFormValues).success) {
                    console.error(validateSchema.parse(updatedFormValues))
                }

                const response = await fetch(`${BASE_URL}/farmer/create`, {
                    method: 'POST',
                    body: JSON.stringify(updatedFormValues),
                });
                return;

            }

            console.error('ESTE NIF NAO FOI RECONHECIDO!');
        }
    }

    // 
    const handleItemUserType = (e: MouseEvent<HTMLLIElement>) => {
        const typeUserDatasetButton = e.currentTarget.dataset['type'];
        const textUserType = e.currentTarget.textContent;
        const UserTypeChoise = typeUserDatasetButton as 'costumer' | 'farmer';

        if (TitleUserTypeRef.current) {
            TitleUserTypeRef.current.textContent = textUserType;
            setTypeUser(UserTypeChoise);
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
                                    onChange={(e) => handleContentChangeInput(e, setContentTextField)}
                                    value={contentTextFieldEmail}
                                />
                                {
                                    contentTextFieldEmail && (
                                        <ButtonClearTextFieldSignForm dispatch={setContentTextField} />
                                    )
                                }
                            </ContainerInput>

                            <TextFieldFarmerOnly
                                content={contentTextFieldNIF}
                                onChange={(e) => handleContentChangeInput(e, setContentTextFieldNIF)}
                                setContent={setContentTextFieldNIF}
                                typeUser={typeUser}
                                name="nif"
                                type="text"
                                placeholder="NIF"
                            />

                            <TextFieldFarmerOnly
                                content={contentTextFieldPhone}
                                setContent={setContentTextFieldPhone}
                                onChange={(e) => handleContentChangeInput(e, setContentTextFieldPhone)}
                                typeUser={typeUser}
                                name="phone"
                                type="tel"
                                placeholder="Número de telefone"
                            />

                            <TextFieldFarmerOnly
                                content={contentTextFieldPassword}
                                setContent={setContentTextFieldPassword}
                                onChange={(e) => handleContentChangeInput(e, setContentTextFieldPassword)}
                                typeUser={typeUser}
                                name="password"
                                type="password"
                                placeholder="Palavra-passe"
                            />

                            <TextFieldFarmerOnly
                                content={contentTextFieldConfirmPassword}
                                setContent={setContentTextFieldConfirmPassword}
                                onChange={(e) => handleContentChangeInput(e, setContentTextFieldConfirmPassword)}
                                typeUser={typeUser}
                                name="confirm-password"
                                type="password"
                                placeholder="Confirmar palavra-passe"
                            />
                            <ButtonSubmitUserInputs type="submit" className="d-flex" onClick={handleButtonSubmitUserInputs}>continuar</ButtonSubmitUserInputs>
                            <ButtonShowHelp type="button">Problemas ao acessar a conta?</ButtonShowHelp>
                        </ContainerUserInputs>
                        {
                            typeUser !== 'farmer' && handleStepContainerAccount(1)
                        }
                    </React.Fragment>
                );
            case 1:
                return (
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