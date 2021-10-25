import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';

function CountrySelector(props) {
    return (
        <FormControl>
            <InputLabel
                htmlFor=""
                shrink
            >
                Quốc Gia
            </InputLabel>
            <NativeSelect
                value={value}
                onchange={() => handleOnChange}
                input={{
                    name: 'Country',
                    id: 'Country-selector'
                }}
            ></NativeSelect>
        </FormControl>
    );
}

export default CountrySelector;