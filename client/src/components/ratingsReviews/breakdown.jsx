import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';

// DELETE WHEN FINISHED
import useStyles from "./tempStyles.jsx";

const Breakdown = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        breakdown component
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <RatingsBreakdown />
          </Grid>
          <Grid item xs={12}>
            <ProductBreakdown />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Breakdown;
