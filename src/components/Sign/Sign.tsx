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
import { z } from "zod";
import { validateSchema } from "./utils/validateSchema";
// import { GenderEnum, IBIOrNIF } from "./@types/IBIOrNIF";

type IBaseFormKeys = z.infer<typeof validateSchema>;

const SignComponent = () => {
    const [controllStep, _] = useState<number>(0);
    const [contentTextFieldEmail, setContentTextField] = useState<string>('');
    const [contentTextFieldNIF, setContentTextFieldNIF] = useState<string>('');
    const [formValues, setFormValues] = useState<IBaseFormKeys>({} as IBaseFormKeys);

    // todas referencias neste componente
    const ContainerSignComponent = useRef<HTMLDivElement | null>({} as HTMLDivElement);
    const ContainerUserTypeListRef = useRef<HTMLUListElement | null>({} as HTMLUListElement);
    const TitleUserTypeRef = useRef<HTMLHeadingElement | null>({} as HTMLHeadingElement);

    const handleContentTextFieldEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setContentTextField(e.target.value);
    }
    const handleContentTextFieldNIF = (e: ChangeEvent<HTMLInputElement>) => {
        setContentTextFieldNIF(e.target.value);
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
        if (formValues.typeUser === 'farmer') {
            Promise.all([
                fetch(`http://localhost:4001/bi/${contentTextFieldNIF}`),
                fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_APIKEY_IPGEOLOCATION}`)
            ]).then(async (response) => {
                const [BIDataFetch, LocationDataFetch] = response.map((data) => data.json());
                const { data } = await BIDataFetch;

                if (data) {
                    const { state_prov, city } = await LocationDataFetch;

                    const {
                        nome,
                        naturalidade,
                        genero,
                        data_nasc,
                        estado_civil,
                        nif,
                        numero,
                    } = data;

                    console.log("OS DADOS DO FAZENDEIRO: ");
                    console.log(data);

                    console.log("OS DADOS DA LOCATION: ");
                    console.log(state_prov, city);

                    setFormValues(prev => ({
                        ...prev,
                        name: nome,
                        born: data_nasc,
                        email: contentTextFieldEmail,
                        gender: genero,
                        civilRule: estado_civil,
                        birthplace: naturalidade,
                        biSingleNumber: numero,
                        nif,
                        typeUser: 'farmer',
                        password: 'angola',
                        confirmPassword: 'angola',
                        location: {
                            state_prov,
                            city
                        },
                        phone: 993895962,
                        pathImage: 'angola',
                    }));

                    console.log(formValues);

                    if (!validateSchema.safeParse(formValues).success) {
                        console.error('Error to match datas from the datas with schema validate!');
                        return;
                    }

                    setFormValues(prev => {
                        return Object.values(prev).map((value) => value = '') as {} as IBaseFormKeys;
                    });
                }
            })
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
                                    onChange={handleContentTextFieldEmail}
                                    value={contentTextFieldEmail}
                                />
                                {
                                    contentTextFieldEmail && (
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
                                            value={contentTextFieldNIF}
                                        />
                                        {
                                            contentTextFieldNIF && (
                                                <ButtonClearTextFieldSignForm dispatch={setContentTextFieldNIF} />
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