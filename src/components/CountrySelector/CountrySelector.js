import { FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: `${theme.spacing(3)}px 0`
    }
}))

function CountrySelector({ value, handleOnChangeSelector, countries }) {
    const style = useStyles()
    return (
        <FormControl className={style.formControl}>
            <InputLabel
                htmlFor=""
                shrink
            >
                Quốc Gia
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={(e) => handleOnChangeSelector(e)}
                inputProps={{
                    name: 'Country',
                    id: 'Country-selector'
                }}
            >
                {countries && countries.length > 0 &&
                    countries.map((country) => {
                        return (
                            <option
                                key={country.ISO2}
                                value={country.ISO2.toLowerCase()}>
                                {country.Country}
                            </option>
                        )
                    })}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    );
}

export default CountrySelector;