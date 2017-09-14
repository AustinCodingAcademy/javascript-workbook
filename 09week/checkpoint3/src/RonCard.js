import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import CardOverlay from './CardOverlay';


const RonCard = (props) => {
  return (
    <Card>
      <CardMedia
        overlay={
          <CardTitle
            title={props.quote}
            subtitle="Ron Swanson Quote of the Day"
          />
        }
      >
        <img src={props.img} alt="Ron Swanson" />
      </CardMedia>
    </Card>
  )
}

RonCard.propTypes = {
  quote: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
}

export default RonCard;
