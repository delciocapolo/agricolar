import styled from "@emotion/styled";

export const Container = styled['div']`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 600;
    
    background-color: rgba(51, 51, 51, 0.4);
    backdrop-filter: blur(14px);
`;

export const PainelSign = styled['div']`
    min-width: 320px;
    width: 37%;
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
`;

export const ButtonClose = styled['button']`
    position: absolute;
    right: 15px;
    width: 40px;
    height: 40px;
    background-color: var(--Gray-50);
    border-radius: 50px;
    z-index: 3;

    & > .btnclose-svg-icon {
        color: var(--Green-900);
    }
`;
// For the accounts
export const ContainerAccounts = styled(ContentBase)`
    height: calc(100% - 42px);
    // overflow: auto;
`;

export const ContainerUserInputs = styled['div']`
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
    justify-content: space-between;
    gap: 0;
    padding-right: 10px;
    box-shadow: var(--box-shadow-double-face);
`;

export const TextField = styled['input']`
    width: calc(100% - 50px);
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
    background-color: rgba(237, 242, 238, 0.5);
    padding: 0.3rem;
    border-radius: 50%;

    & > .btnclose-svg-icon {
        color: rgba(0, 38, 3, 0.5);
    }
`;

export const ButtonSubmitUserInputs = styled['button']`
    width: 100%;
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
    background-color: yellow;
`;
export const ContainerMessageEasyAccess = styled['div']`

`;
export const ContainerLine = styled['div']`

`;
export const MessageEasyAccess = styled['h1']`
`;