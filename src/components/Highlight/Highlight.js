import { Grid } from '@material-ui/core';
import React from 'react';
import HightlightCard from './HightlightCard';

function Highlight({ report }) {
    const data = report && report.length > 0 ? report[report.length - 1] : [];
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data && data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data && data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Số ca tử vong',
            count: data && data.Deaths,
            type: 'death'
        },
    ]
    return (
        <Grid container spacing={3} >
            {
                summary && summary.length > 0 && summary.map((item, index) => {
                    return (
                        <HightlightCard item={item} key={index} />
                    )
                })
            }

        </Grid>
    );
}

export default Highlight;