import React from "react";
import {Button, Card}  from "react-bootstrap" ;
import {Link} from "react-router-dom";
const CitiesCards = ({cities}) => {
  return (
   

  
    <div style={{flexWrap:"wrap" , display:"flex"}}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cities.Image} />
  <Card.Body>
    <Card.Title>{cities.name}</Card.Title>
    <Card.Text>{cities.continent}</Card.Text>
    <Card.Text>{cities.trailer}</Card.Text>

  </Card.Body>
  <Link to={`/trailer/${cities.id}`}><Button>Trailer</Button></Link>
</Card>
    </div>
  )
}

export default CitiesCards ; 