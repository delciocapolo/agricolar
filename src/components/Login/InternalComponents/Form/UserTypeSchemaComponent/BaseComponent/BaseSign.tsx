import styled, { keyframes } from "styled-components";
import { ChevronDown } from "lucide-react";

import type { UserType } from "../../@types/userType";
import React, { FC, MouseEvent, useRef } from "react";

interface ITabUserType {
    state: UserType;
    set: React.Dispatch<React.SetStateAction<UserType>>;
}

export const TabUserType: FC<ITabUserType> = ({ state, set }) => {
    const ContainerUserTypeListRef = useRef<HTMLUListElement | null>({} as HTMLUListElement);
    const TitleUserTypeRef = useRef<HTMLHeadingElement | null>({} as HTMLHeadingElement);

    const handleItemUserType = (e: MouseEvent<HTMLLIElement>) => {
        const typeUserDatasetButton = e.currentTarget.dataset['type'];
        const textUserType = e.currentTarget.textContent;
        const UserTypeChoise = typeUserDatasetButton as UserType;

        if (TitleUserTypeRef.current) {
            TitleUserTypeRef.current.textContent = textUserType;
            set(UserTypeChoise);
        }
    }

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
    `;
    const ContainerInput = styled['div']`
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
    const TitleUserType = styled['h2']`
        width: 100%;
        font: var(--Body-Small-400);
        justify-content: space-between;
    `;
    const ContainerUserTypeList = styled['ul']`
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
    const ItemUserType = styled['li']`
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
    return (
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
                <ItemUserType data-type="customer" onClick={handleItemUserType}>Consumidor</ItemUserType>
                <ItemUserType data-type="farmer" onClick={handleItemUserType}>Fazendeiro</ItemUserType>
            </ContainerUserTypeList>
        </ContainerInput>
    )
};