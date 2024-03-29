import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
    opacity: 0.4;
  }

  70% {
    transform: translate3d(0, -15px, 0);
    opacity: 0.7;
  }

  90% {
    transform: translate3d(0,-4px,0);
    opacity: 0.9;
  }
`

export const Container = styled['div']`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 600;
    
    background-color: rgba(51, 51, 51, 0.3);
    backdrop-filter: blur(10px);
`;

export const PainelSign = styled['div']`
    width: 35%;
    min-width: 320px;
    max-width: 527px;
    height: 505px;
    background-color: var(--White);
    border-radius: var(--border-radius);
    padding: 0.5rem;

    position: relative;
`;

export const SubContainerBase = styled['div']`
    display: block;
    background-color: yellow;
    margin-bottom: 5px;
`;

export const ContentBase = styled['div']`
    width: 85%;
    margin: 0 auto;

    // background-color: red;
`;

// For the title
export const ContentTitle = styled(ContentBase)`
    text-align: center;
    padding: 0.7rem 0;

    position: relative;
`;
export const Title = styled['h1']`
    // font: var(--Body-Large-500);
    font: var(--Body-XL-500);
    color: var(--Green-900);
    line-height: 1;
    text-transform: none;
`;
export const ContainerButton = styled['div']`
    width: 100%;
    height: 42px;
    position: absolute;
    z-index: 3;
    left: 0;
    justify-content: flex-end;
    padding: 0 0.7rem;
    
    &:has(button[data-name="button-come-back-sign-process"]) {
        justify-content: space-between;
    }
`;
export const ButtonClose = styled['button']`
    width: 30px;
    height: 30px;
    background-color: var(--Gray-50);
    border-radius: 50px;

    & > .btnclose-svg-icon {
        color: var(--Green-900);
    }
`;
// For the accounts
export const ContainerAccounts = styled(ContentBase)`
    min-height: calc(100% - 42px);
    padding: 1rem 1px;
    max-height: 447px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--Green-100) transparent;
`;

export const ContainerUserInputs = styled['form']`
    min-height: 142px;
    // background-color: brown;
    flex-direction: column;
    padding: 0;
    align-items: flex-start;
`;

export const ContainerInput = styled['div']`
    width: 100%;
    height: 55px;
    background-color: var(--White);
    border-radius: var(--border-radius);
    gap: 0;
    box-shadow: var(--box-shadow-outline);
    
    &:has(input) {
        padding-right: 10px;
        justify-content: space-between;
    }
    &:has(ul.user-type-list) {
        position: relative;
        cursor: pointer;
        justify-content: flex-start;
        padding: 0 0.5rem;
    }
`;

export const TextField = styled['input']`
    width: calc(100% - 25px);
    height: 55px;
    padding: 0 0.7rem;
    border-radius: var(--border-radius);
    border: none;
    font: var(--Body-Small-400);
    text-transform: none;

    &::placeholder {
        text-transform: capitalize;
    }
`;

export const ButtonClearTextField = styled['button']`
    width: 20px;
    height: 20px;
    background-color: rgba(237, 242, 238, 0.5);
    border-radius: 50%;

    & > .btnclose-svg-icon {
        color: rgba(0, 38, 3, 0.5);
    }
`;

export const ButtonSubmitUserInputs = styled['button']`
    width: 100%;
    min-height: 47px;
    color: var(--White);
    background-color: var(--Success);
    padding: 0.7rem 0;
    font: var(--Body-Medium-500);
    border-radius: 50px;
`;

export const ButtonShowHelp = styled['button']`
    height: 20px;
    text-decoration: underline;
    background-color: transparent;
    font: var(--Body-Small-400);
    text-transform: none;
`;

export const ContainerAccountsLinks = styled['div']`
    height: calc(100% - 144px);
    padding: 1.5rem 0;
    // background-color: yellow;
    flex-direction: column;
    justify-content: flex-start;
`;
export const ContainerMessageEasyAccess = styled['div']`
    width: 100%;
    min-height: 25px;
    gap: 0;
    justify-content: space-between;
    // background-color: brown;
`;
export const ContainerLine = styled['div']`
    background-color: var(--Gray-200);
    width: 30%;
    height: 1px;
`;
export const MessageEasyAccess = styled['h1']`
    font: var(--Body-Small-500);
    // background-color: green;
`;

// Container dos links das contas
export const ContainerLinkAccount = styled['nav']`
    width: 100%;
`;

export const LinkAccount = styled['a']`
    width: 100%;
    min-height: 47px;
    text-align: center;
    background-color: transparent;
    position: relative;
    border-radius: 50px;
    margin: 0 0 15px 0;
    box-shadow: var(--box-shadow-outline);
`;

export const ContentLinkAccount = styled['span']`
    font: var(--Body-Medium-500);
    color: var(--Green-900);
`;

export const SubContentLinkAccount = styled['div']`
    position: absolute;
    left: 10px;
    width: 37px;
    height: 37px;
    // background-color: purple;
    border-radius: 50px;

    & > .linkaccount-icon-svg {
        fill: var(--Green-900);
        stroke: none;
    }
`;

// List User Type
export const ContainerUserTypeList = styled['ul']`
    background-color: var(--White);
    position: absolute;
    width: 0;
    padding: 0;
    top: 0;
    left: 0;
    opacity: 0;
    height: fit-content;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-outline);

    & > li {
        font-size: 0;
        line-height: 3;
    }

    &.actived {
        width: 100%;
        padding: 5px;
        top: calc(100% + 5px);
        animation: ${bounce} 0.6s ease;
        opacity: 1;
        
        & > li {
            font-size: 1rem;
            line-height: 3;
        }
    }
`;

export const ItemUserType = styled['li']`
    display: block;
    width: 100%;
    font: var(--Body-Medium-500);
    cursor: pointer;
    background-color: transparent;
    color: var(--Gray-800);

    &:first-of-type {
        margin: 0 0 7px 0;
    }
`;

export const TitleUserType = styled['h2']`
    width: 100%;
    font: var(--Body-Small-400);
    justify-content: space-between;
`;