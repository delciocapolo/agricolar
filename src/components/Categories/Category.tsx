import { useLoaderData } from "react-router-dom";
import { ILoader, ILoaderSchema } from "./@types/type";
import { CategoryContainer } from "./InternalComponents/BaseCategory";
import Menu from "../Navigation/Menu";
import ContextComponent from "../ContextComponent/ContextComponent";

export async function loader({ params }: ILoader) {
    // objecto para pegar os produto da categoria correspondente;
    return { params };
}

export default function Category() {
    const { params } = useLoaderData() as ILoader<ILoaderSchema>;

    return (
        <ContextComponent>
            <CategoryContainer>
                <Menu />
            </CategoryContainer>
        </ContextComponent>
    );
};