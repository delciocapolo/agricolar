import Spinner from "../main-components/Spinner/Spinner";
import {
    Container,
    FormContainer,
    LoginContainer
} from "./InternalComponents/BaseLogin";
import ContainerContentComponent from "./InternalComponents/ContainerContentComponent";
import SchemaLoginComponent from "./InternalComponents/Form/Schema";
import { Suspense, useEffect, useState } from "react";

const LoginComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(prev => (!prev));
    }, []);

    return (
        <Suspense fallback={<Spinner loading={isLoading} />}>
            <LoginContainer>
                <Container className="d-flex b-image">
                    <ContainerContentComponent />
                    {/* form */}
                    <FormContainer>
                        <SchemaLoginComponent />
                    </FormContainer>
                </Container>
            </LoginContainer>
        </Suspense>
    );
};

export default LoginComponent;