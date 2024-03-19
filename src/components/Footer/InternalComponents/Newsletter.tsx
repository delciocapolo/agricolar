import Logo from "../../../assets/Logo";
import { ChangeEvent, FC, MouseEvent, useState } from "react";
import {
    ContainerBase,
    ButtonSubscribe,
    Container,
    NewsletterContainer,
    Text,
    TextField,
    TextFieldContainer,
    Title
} from "./ComponentBase/ComponentBaseNewsletter";

export const EmailNewsletterComponent: FC<{ className?: string }> = ({ className }) => {
    const handleClickSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

    };

    const [inputText, setInputText] = useState("");
    const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    return (
        <ContainerBase className={`${className} d-flex`}>
            <TextFieldContainer className="d-flex" method="post" action="/subscribe/newsletter">
                <TextField type="email" placeholder="seu endereço de email" value={inputText} onChange={handleInputEmail} />
                <ButtonSubscribe type="submit" onClick={handleClickSubscribe}>Subscrever</ButtonSubscribe>
            </TextFieldContainer>
        </ContainerBase>
    );
};


const Newsletter = () => {

    return (
        <NewsletterContainer>
            <Container className="d-flex container-newsletter-footer">
                <ContainerBase className="d-flex container-logo-agricolar-newsletter">
                    <Logo />
                </ContainerBase>

                <ContainerBase className="d-flex container-text-agricolar-newsletter">
                    <Title>Subscreva à nossa newsletter</Title>
                    <Text>para se manter informando sobre as fazendas e os insignhs no mercado.</Text>
                </ContainerBase>

                <EmailNewsletterComponent />
            </Container>
        </NewsletterContainer>
    );
};

export default Newsletter;