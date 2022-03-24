import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Citiesdata } from "../Constant/Data";
import {Button} from "react-bootstrap";
const Trailer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const about = Citiesdata.find((el) => el.id == params.id);
  console.log(params.id);
  return (
    <div>
    <h5>{about. continent}</h5>

    <Button onClick={() => navigate(-1)}>Back</Button>
  
    <div>Trailer</div>
    </div>
  )
}

export default Trailer