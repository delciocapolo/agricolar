import React, { FC, useState } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const valuetext = (value: number) => (`${value} 000 kz`);

const minDistance = 10;
interface ISliderPriceComponent {
    value: number[];
    set: React.Dispatch<React.SetStateAction<number[]>>
};

const SliderPriceComponent: FC<ISliderPriceComponent> = ({ value, set }) => {
    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            set([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            set([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }

    };
    const CustomSlider = styled(Slider)({
        color: "var(--Success)",
        '& > .MuiSlider-rail': {
            backgroundColor: 'var(--Gray-200)'
        },
        '& > .MuiSlider-thumb': {
            backgroundColor: 'var(--White)',
            border: '2px solid var(--Success)',
            width: 18,
            height: 18,
            cursor: 'grabbing'
        }
    });

    return (
        <CustomSlider
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
        />
    );
};


export default SliderPriceComponent;