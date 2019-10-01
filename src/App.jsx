import React from "react";
import Container from "@material-ui/core/Container";
import clsx from 'clsx';
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { render } from "react-dom";
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const App = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [chartValue, setChartValue] = React.useState(20);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const chartData = {
    datasets: [{
        data: [chartValue,(chartValue-100)*(-1)],
        backgroundColor : [
          "orange"
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Full',
        "Empty"
    ]
    

};
  return (
    <Container maxWidth="sm">
      <Box component="span" m={1}>
        <Card raised>
          <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
            Bern Bahnhof #1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Recycling
          </Typography>
          <Doughnut data={chartData}/>
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
        </Card>
      </Box>
    </Container>
  );
};

render(<App />, document.getElementById("root"));
