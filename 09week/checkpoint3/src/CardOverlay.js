import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';

const CardOverlay = (props) => {
  return (
    <CardTitle
      title={props.quote}
      subtitle="Ron Swanson Quote of the Day"
    />
  );
}

CardOverlay.propTypes = {
  quote: PropTypes.string.isRequired,
}

export default CardOverlay;
