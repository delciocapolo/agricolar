import { useLoaderData } from "react-router-dom";
import { FilterHorizontalIcon } from "hugeicons-react";
import styled from "@emotion/styled";
import { ILoader, ILoaderSchema } from "./@types/type";
import {
  Button,
  ButtonContainer,
  CategoryContainer,
  Container0,
  ContainerAllCategories,
  ContainerProducts,
  FilterContainer,
  FormControl,
  Frame345,
  ProductContainer,
  SortByContainer,
  SpanButton,
  SubText4EachCategory as BaseSubText4EachCategory,
  TextResult,
  Title4EachCategory,
  TitleCategoryComponent,
  TitleCategoryComponentContainer as BaseTitleCategoryComponentContainer,
  TopContainer,
  StarAvaliacaoContainer,
  ButtonTag,
  SelectSort,
  OptionOrder,
} from "./InternalComponents/BaseCategory";
import Menu from "../Navigation/Menu";
import ContextComponent from "../ContextComponent/ContextComponent";
import Footer from "../Footer/Footer";
import {
  Divider,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Checkbox,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import Normal from "../main-components/Product5n/Normal";
import TitleContainerCategory from "./InternalComponents/TitleContainerCategory";
import SliderPriceComponent from "./InternalComponents/SliderPriceComponent";
import ProductDetails from "../main-components/ProductQuickView/ProductDetails";
import { categories_list, radio_config, checkbox_config, divider_config } from "./configProps";

export default function Category() {
  const [sort, setSort] = useState("");
  const [sliderPriceValue, setSliderPriceValue] = useState<number[]>([43, 53]);

  const SubText4EachCategory = styled(BaseSubText4EachCategory)`
    font: var(--Body-Small-400);
  `;
  const TitleCategoryComponentContainer = styled(
    BaseTitleCategoryComponentContainer,
  )`
    width: 100%;
    justify-content: flex-start;
  `;

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
  const {
    params: { category },
  } = useLoaderData() as ILoader<ILoaderSchema>;
  const [toggleAllCategories, setToggleAllCategories] = useState<boolean>(true);
  const [togglePriceCategories, setTogglePriceCategories] = useState<boolean>(true);
  const [toggleRateCategories, setToggleRateCategories] = useState<boolean>(true);
  const [toggleTagCategories, setToggleTagCategories] = useState<boolean>(true);
  const find_category = categories_list.find(({ name }) => name == category);
  let category_finded = "";
  if (find_category) {
    category_finded = find_category.name;
  } else {
    category_finded = categories_list[0].name;
  }

  return (
    <ContextComponent>
      <CategoryContainer>
        <Menu />

        {/* Product Details */}
        <ProductDetails />

        {/*  */}
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
                  <InputLabel id="sortByCategory">ordernar por</InputLabel>
                  <Select
                    labelId="sort-by-category"
                    id="sortByCategory"
                    value={sort}
                    label="ordernar por"
                    onChange={handleChange}
                  >
                    <MenuItem value="relevantes">mais relevantes</MenuItem>
                    <MenuItem value="recentes">recentes</MenuItem>
                    <MenuItem value="mais_vendidos">mais vendidos</MenuItem>
                  </Select>
                </FormControl>
              </SortByContainer>
            </Container0>
            <Container0 className="d-flex">
              <TextResult>
                <b>{52}</b> Resultados encontrados
              </TextResult>
            </Container0>
          </TopContainer>

          <Frame345 className="d-flex">
            <FilterContainer>
              <ContainerAllCategories>
                <TitleContainerCategory
                  title="Todas Categorias"
                  state={toggleAllCategories}
                  setState={setToggleAllCategories}
                />
                {
                  toggleAllCategories && (
                    <FormControl fullWidth>
                      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={category_finded}
                        name="radio-buttons-group"
                      >
                        {categories_list.map((desc_cat) => (
                          <FormControlLabel
                            value={desc_cat.name}
                            control={
                              <Radio sx={{ ...radio_config }} size="small" />
                            }
                            label={
                              <TitleCategoryComponent
                                title={desc_cat.label}
                                quantidade={desc_cat.quantidade}
                              />
                            }
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  )
                }
              </ContainerAllCategories>

              <Divider color={divider_config['color']} sx={{ ...divider_config['sx'] }} />
              <ContainerAllCategories>
                <TitleContainerCategory
                  title="Preço"
                  state={togglePriceCategories}
                  setState={setTogglePriceCategories}
                />
                {
                  togglePriceCategories && (
                    <React.Fragment>
                      <SliderPriceComponent
                        value={sliderPriceValue}
                        set={setSliderPriceValue}
                      />
                      <TitleCategoryComponentContainer className="d-flex">
                        <SubText4EachCategory>preço</SubText4EachCategory>
                        <Title4EachCategory>
                          {sliderPriceValue[0]} - {sliderPriceValue[1]}
                        </Title4EachCategory>
                      </TitleCategoryComponentContainer>
                    </React.Fragment>
                  )
                }
              </ContainerAllCategories>

              <Divider color={divider_config['color']} sx={{ ...divider_config['sx'] }} />
              <ContainerAllCategories>
                <TitleContainerCategory
                  title="Avaliação"
                  state={toggleRateCategories}
                  setState={setToggleRateCategories}
                />
                {
                  toggleRateCategories && (
                    <FormGroup sx={{ width: "100%" }}>
                      <FormControlLabel
                        control={<Checkbox sx={{ ...checkbox_config }} />}
                        label={
                          <StarAvaliacaoContainer rating_number={5} label="5.0" />
                        }
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ ...checkbox_config }} />}
                        label={
                          <StarAvaliacaoContainer rating_number={4} label="4.0+" />
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox sx={{ ...checkbox_config }} defaultChecked />
                        }
                        label={
                          <StarAvaliacaoContainer rating_number={3} label="3.0+" />
                        }
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ ...checkbox_config }} />}
                        label={
                          <StarAvaliacaoContainer rating_number={2} label="2.0+" />
                        }
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ ...checkbox_config }} />}
                        label={
                          <StarAvaliacaoContainer rating_number={1} label="1.0+" />
                        }
                      />
                    </FormGroup>
                  )
                }
              </ContainerAllCategories>

              <Divider color={divider_config['color']} sx={{ ...divider_config['sx'] }} />
              <ContainerAllCategories>
                <TitleContainerCategory
                  title="Tags Populares"
                  state={toggleTagCategories}
                  setState={setToggleTagCategories}
                />
                {
                  toggleTagCategories && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      <ButtonTag title="tiffin" />
                      <ButtonTag title="tiffin" />
                      <ButtonTag title="tiffin" />
                      <ButtonTag title="tiffin" />
                      <ButtonTag title="tiffin" />
                      <ButtonTag title="tiffin" />
                      <ButtonTag title="tiffin" />
                      <ButtonTag title="tiffin" />
                    </Stack>
                  )
                }
              </ContainerAllCategories>
            </FilterContainer>

            <ContainerProducts className="d-grid">
              {[2, 1, 4, 2, 5, 2, 1, 4, 2, 9].map((_) => (
                <Normal
                  price={Math.round(Math.random() * 4000)}
                  ratingNumber={3}
                  saleStatus={["new"]}
                />
              ))}
            </ContainerProducts>
          </Frame345>
        </ProductContainer>

        <Footer />
      </CategoryContainer>
    </ContextComponent>
  );
}
