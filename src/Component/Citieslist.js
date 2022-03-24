import React, { useState }  from 'react' ;
import { useNavigate } from 'react-router-dom';
import {Button} from "react-bootstrap" ;
import { Citiesdata } from '../Constant/Data';
import Add from "./Add";
import CitiesCards from "./CitiesCards";

const Citieslist = ({input}) => {
    let navigate=useNavigate()
     const[cities , setCities] = useState(Citiesdata);
     const addCity=(newCity)=>{
         setCities([...cities,newCity])
     }
    return (
        
        <>
            <Add addCity={addCity}/>
        <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>
            {cities.filter(el=>el.name.toLowerCase().includes(input.toLowerCase()))
            .map((city)=>(<CitiesCards cities={city} key={city.id} />
            ))}
        </div>
        <Button onClick={() => navigate(-1)}>Back</Button>
        </>
    );
    

};
export default Citieslist;