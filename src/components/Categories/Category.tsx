import { useLoaderData } from "react-router-dom";
import { FilterHorizontalIcon } from "hugeicons-react";
import { ILoader, ILoaderSchema } from "./@types/type";
import {
    Button,
    ButtonContainer,
    CategoryContainer,
    Container0,
    ContainerAllCategories,
    ContainerCategory,
    ContainerProducts,
    FilterContainer,
    FormControl,
    Frame345,
    ProductContainer,
    SortByContainer,
    SpanButton,
    TextResult,
    TopContainer
} from "./InternalComponents/BaseCategory";
import Menu from "../Navigation/Menu";
import ContextComponent from "../ContextComponent/ContextComponent";
import Footer from "../Footer/Footer";
import { FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import Normal from "../main-components/Product5n/Normal";
import TitleContainerCategory from "./InternalComponents/TitleContainerCategory";

export default function Category() {
    const [sort, setSort] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    const _ = useLoaderData() as ILoader<ILoaderSchema>;
    const [toggleAllCategories, setToggleAllCategories] = useState<boolean>(true);
    const radio_config = {
        color: 'var(--Success)',
        '&.Mui-checked': {
            color: 'var(--Success)'
        }
    }
    return (
        <ContextComponent>
            <CategoryContainer>
                <Menu />

                <ProductContainer>
                    <TopContainer className="d-flex">
                        <Container0 className="d-flex">
                            <ButtonContainer>
                                <Button type="button" className="d-flex">
                                    <SpanButton>filtrar</SpanButton>
                                    <FilterHorizontalIcon size={20} color="var(--Gray-50)" />
                                </Button>
                            </ButtonContainer>
                            <SortByContainer className="d-flex">
                                <FormControl size="small" sx={{ minWidth: "47%" }}>
                                    <InputLabel id="demo-simple-select-label">ordernar por</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={sort}
                                        label="ordernar por"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="relevantes">mais relevantes</MenuItem>
                                        <MenuItem value="recentes">recentes</MenuItem>
                                        <MenuItem value="mais_vendidos">mais vendidos</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* <SelectSort name="order_by">
                                    <OptionOrder>Mais relevantes</OptionOrder>
                                    <OptionOrder>Recentes</OptionOrder>
                                </SelectSort> */}
                            </SortByContainer>
                        </Container0>
                        <Container0 className="d-flex">
                            <TextResult>
                                <b>{52}</b>
                                {" "}
                                Resultados encontrados
                            </TextResult>
                        </Container0>
                    </TopContainer>
                    <Frame345 className="d-flex">
                        <FilterContainer>
                            <ContainerAllCategories>
                                <TitleContainerCategory title="Todas Categorias" state={toggleAllCategories} setState={setToggleAllCategories} />
                                <FormControl fullWidth>
                                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio sx={{ ...radio_config }} />} label={`Frutas ${150}`} />
                                        <FormControlLabel value="male" control={<Radio sx={{ ...radio_config }} />} label={`Vegetais ${75}`} />
                                        <FormControlLabel value="other" control={<Radio sx={{ ...radio_config }} />} label={`Cozinha ${15}`} />
                                        <FormControlLabel value="other" control={<Radio sx={{ ...radio_config }} />} label={`Snacks  ${47}`} />
                                    </RadioGroup>
                                </FormControl>
                            </ContainerAllCategories>
                        </FilterContainer>
                        <ContainerProducts className="d-grid">
                            {
                                [2, 1, 4, 2, 5, 2, 1, 4, 2, 9].map((_) => (<Normal price={Math.round(Math.random() * 4000)} ratingNumber={3} saleStatus={['new']} />))
                            }
                        </ContainerProducts>
                    </Frame345>
                </ProductContainer>

                <Footer />
            </CategoryContainer>
        </ContextComponent>
    );
};