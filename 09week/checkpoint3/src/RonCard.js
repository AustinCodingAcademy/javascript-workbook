import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';


const RonCard = (props) => {
  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title={props.quote}
        subtitle="Ron Swanson Quote of the Day" />}
        >
        <img src={props.img} alt="Ron Swanson" />
      </CardMedia>
    </Card>
  )
}
export default RonCard;
