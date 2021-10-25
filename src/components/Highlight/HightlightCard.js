import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';
const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
        if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' };
        else return { borderLeft: '5px solid gray' };
    },
    title: { fontSize: 18, marginBottom: 5 },
    count: { fontWeight: 'bold', fontSize: 18 },
});
function HightlightCard({ item }) {
    const { count, type } = item;
    const classes = useStyles({ type });
    return (
        <Grid item sm={4} xs={12} >
            <Card className={classes.wrapper}>
                <CardContent>
                    <Typography components='p' variant='body2' className={classes.title}>
                        {item.title}
                    </Typography>
                    <Typography components='span' variant='body2' className={classes.count} >
                        <CountUp end={count || 0} duration={1} separator={' '} />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default HightlightCard;