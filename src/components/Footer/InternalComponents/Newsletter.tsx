import styled from "@emotion/styled";
import Logo from "../../../assets/Logo";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Container as ContainerCentalized } from "../../Container/Container";

const Newsletter = () => {
    const NewsletterContainer = styled['div']`
        width: 100%;
        // background-color: brown;
        
        `;
    const Container = styled(ContainerCentalized)`
        margin: auto;
        padding: 2.5rem 0;
        justify-content: space-between;
        min-height: 0;
    `;
    const ContainerBase = styled['div']`
        align-items: flex-start;
        flex-direction: column;
        gap: 2px;
        // background-color: purple;
    `;
    const Title = styled['h1']`
        font: var(--Body-XXL-500);
        color: var(--Green-900);
        font-size: 1.2rem;
    `;
    const Text = styled['span']`
        font: var(--Body-Small-400);
        color: var(--Green-400);
        font-size: 0.725rem;
    `;
    const TextFieldContainer = styled['form']`
        width: 435px;
        gap: 0;
        justify-content: space-between;
        border-radius: 50px;
        background-color: var(--White);
    `;

    const TextField = styled['input']`
        width: 64%;
        line-height: 3;
        padding: 0 1.5rem;
        border-radius: 50px;
        border: none;
        text-transform: none;

        &::place-holder {
            color: var(--Green-500);
            font: var(--Body-Medium-400);
        }
    `;
    const ButtonSubscribe = styled['button']`
        background-color: var(--Success);
        color: var(--White);
        font: 1rem 'Poppins-semi-bold';
        line-height: 3;
        padding: 0 2rem;
        border-radius: 50px;
        min-width: 124px;
    `;

    const handleClickSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

    };

    const [inputText, setInputText] = useState("");
    const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }


    return (
        <NewsletterContainer>
            <Container className="d-flex">
                <ContainerBase className="d-flex">
                    <Logo />
                </ContainerBase>
                <ContainerBase className="d-flex">
                    <Title>Subscreva à nossa newsletter</Title>
                    <Text>para se manter informando sobre as fazendas e os insignhs no mercado.</Text>
                </ContainerBase>
                <ContainerBase className="d-flex">
                    <TextFieldContainer className="d-flex" method="post" action="/subscribe/newsletter">
                        <TextField type="email" placeholder="seu endereço de email" value={inputText} onChange={handleInputEmail} />
                        <ButtonSubscribe type="submit" onClick={handleClickSubscribe}>Subscrever</ButtonSubscribe>
                    </TextFieldContainer>
                </ContainerBase>
            </Container>
        </NewsletterContainer>
    );
};

export default Newsletter;