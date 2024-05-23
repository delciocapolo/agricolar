import styled from "@emotion/styled";
import { styled as muiStyled } from '@mui/material/styles';
import { MapPin } from "lucide-react";
import { Container as ContainerBase } from "../../Container/Container";
import { Link } from "react-router-dom";
import { useUserData } from "../../contexts/UserData";
import Badge, { BadgeProps } from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const SmallOne = () => {
    const { usercontext } = useUserData();
    const isUserLogin: boolean = 'token' in usercontext && 'email' in usercontext;

    const Container = styled(ContainerBase)`
        min-height: 0;
        justify-content: space-between;
        padding: 0.3rem 0;
        margin: auto;
        
        & > * {
            width: fit-content;
        }
    `;

    const BadgeContainer = muiStyled(Badge)<BadgeProps>(() => ({
        '& .MuiBadge-badge': {
            top: '2px',
            right: '2px'
        }
    }))

    const SmallOneContainer = styled['div']`
        width: 100%;
        padding: 8px 0;
        background-color: var(--Success);
        // border-radius: var(--border-radius);
        border-bottom: 0.5px solid rgba(51, 51, 51, 0.05)
    `;
    const ContactContainer = styled['div']`
        gap: 5px;
        justify-content: flex-start;
        padding: 0;
    `;
    const TitleContact = styled['h1']`
        font: var(--Body-Tiny-400);
        color: var(--White);
    `;

    const LinksContainer = styled['div']({
        gap: '10px',
        justifyContent: 'flex-end',
        padding: 0
    });

    const ButtonSignUpIn = styled(Link)`
        text-align: center;
        text-transform: capitalize;
        font: var(--Body-Tiny-400);
        color: var(--White);
        height: fit-content;
        padding: 0.4rem 0 0.4rem 0.7rem;
    `;
    const PulseComponent = () => {
        const ContainerPulse = styled['div']`
            background-color: #66FF99;

            &.circle {
                width: 13px;
                height: 13px;
                border-radius: 50%;
                box-shadow: 0px 0px 1px 1px #0000001a;
            }
            &.pulse {
                animation: pulse-animation 2s infinite;
            }

            @keyframes pulse-animation {
                0% {
                  box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
                }
                100% {
                  box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
                }
            }
        `;
        return <ContainerPulse className="circle pulse" />;
    }
    // -------/\-----

    return (
        <SmallOneContainer>
            <Container className="d-flex">
                <ContactContainer className="d-flex">
                    <MapPin style={{ color: 'var(--White)' }} />
                    <TitleContact>Localização do escritório: Cassequel - 61B, Luanda, Angola</TitleContact>
                </ContactContainer>
                <LinksContainer className="links-container d-flex">
                    {
                        isUserLogin && (
                            <Stack>
                                <BadgeContainer badgeContent={<PulseComponent />}>
                                    <Link to="/dashboard">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Link>
                                </BadgeContainer>
                            </Stack>
                        )
                    }
                    {
                        !isUserLogin && (
                            <ButtonSignUpIn to="/login">Criar conta | Entrar</ButtonSignUpIn>
                        )
                    }
                </LinksContainer>
            </Container>
        </SmallOneContainer>
    )
};

export default SmallOne;