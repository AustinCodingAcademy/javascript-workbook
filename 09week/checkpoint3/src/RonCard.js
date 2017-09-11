import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import QuotePresenter from './QuotePresenter';


const RonCard = (props) => {
  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title={props.quote}
        subtitle="Ron Swanson Quote of the Day" />}
        >
        <img src={props.img} alt="Ron Swanson" />
      </CardMedia>

      <CardText>

        <QuotePresenter quote={props.quote} />

      </CardText>
      
    </Card>
  )
}
export default RonCard;
