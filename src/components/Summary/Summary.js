import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HightMaps from '../Charts/HightMaps/HighMaps';
import LineChart from '../Charts/LineChart/LineChart';

function Summary({ report, slectedCountryId }) {
    const [mapData, setMapData] = useState({})
    useEffect(() => {
        if (slectedCountryId) {
            import(`@highcharts/map-collection/countries/${slectedCountryId}/${slectedCountryId}-all.geo.json`).then((res) => { setMapData(res) })
        }
    }, [slectedCountryId])
    return (
        <div style={{ marginTop: '20px' }}>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LineChart report={report}></LineChart>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <HightMaps mapData={mapData} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Summary;