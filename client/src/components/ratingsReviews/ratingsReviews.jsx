import React from 'react';
import Grid from '@material-ui/core/Grid';

import Loadable from 'react-loadable';
import Loading from '../loading.jsx';

const BreakdownLoadable = Loadable({
  loader: () => import('./breakdown.jsx'),
  loading: Loading
});

const ReviewListLoadable = Loadable({
  loader: () => import('./reviewList.jsx'),
  loading: Loading
});

const RatingsReviews = (props) => {
  return (
    <div
      data-testid="RatingsReviews"
      id="RatingsReviews"
      style={{ padding: '1em' }}>
      <Grid container spacing={1}>
        <BreakdownLoadable />
        <ReviewListLoadable />
      </Grid>
    </div>
  );
};

export default RatingsReviews;
