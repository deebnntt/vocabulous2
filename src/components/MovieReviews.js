// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className="review">
      <a className="review-link" href={link.url}>
        {headline}
      </a>
      <br />
      <p className="author">{byline}</p>
      <div>{summary_short}</div>
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
