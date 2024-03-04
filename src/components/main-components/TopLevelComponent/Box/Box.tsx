import styled from "@emotion/styled";
import { FC, HTMLAttributes, ReactNode } from "react";

const configs = {
    width: 'clamp(310px, 85%, 1024px)',
    height: 'fit-content',
    margin: 'auto',
    padding: '0.3rem'
};

const flex = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
};

const grid = {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px',
};

interface IBoxContainer extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    grid?: boolean;
}

const BoxContainer = styled['div']<IBoxContainer>(props => (
    props.grid ? { ...grid, ...configs } : { ...flex, ...configs }
));


const Box: FC<IBoxContainer> = (props) => {
    const { children } = props;
    return (
        <BoxContainer {...props}>
            {children}
        </BoxContainer>
    )
};

export default Box;