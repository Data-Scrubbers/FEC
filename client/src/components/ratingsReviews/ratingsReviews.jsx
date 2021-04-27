import React from 'react';
import ReviewList from './reviewList.jsx';
import Breakdown from './breakdown.jsx';
import Grid from '@material-ui/core/Grid';

const RatingsReviews = (props) => {
  return (
    <div
      data-testid="RatingsReviews"
      id="RatingsReviews"
      style={{ padding: '1em' }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Breakdown />
        </Grid>
        <Grid item xs={9}>
          <ReviewList />
        </Grid>
      </Grid>
    </div>
  );
};

export default RatingsReviews;
