import React , {useState} from "react";
import Citieslist from "./Citieslist";
import {Form} from "react-bootstrap" ; 



const Search = () => {
    const [search, setSearch] = useState("")
console.log(search);   
   
  return (
    <div>
  <Form.Control type="nom"placeholder="lawej"
    onChange={(e) => setSearch(e.target.value)}
    />
    <br/>
   <Citieslist input={search}/>
    </div>
  );
};

export default Search;