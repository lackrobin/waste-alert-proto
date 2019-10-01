import React from "react";
import clsx from 'clsx';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
}));
export const WasteCard = ({ data }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [chartValue, setChartValue] = React.useState(20);

    const handleChartValue = () => {
        setChartValue(chartValue + 1);
    }


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const chartData = {
        datasets: [{
            data: [chartValue, (chartValue - 100) * (-1)],
            backgroundColor: [
                "orange"
            ]
        }],
        labels: [

        ]


    };
    return (
        <Card raised className="card">
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.types[0]}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Doughnut data={chartData} />
                    </Grid>
                    <Grid item xs={6}>
                        <Doughnut data={chartData} />
                    </Grid>
                    <Grid item xs={6}>
                        <Doughnut data={chartData} />
                    </Grid>
                    <Grid item xs={6}>
                        <Doughnut data={chartData} />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                </CardContent>
            </Collapse>
        </Card>);
}