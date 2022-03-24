import React , {useState} from "react";
import {Modal , Button } from "react-bootstrap";

function Add({addCity}) {
    

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
//.......................//
const [name, setName] = useState("City");
const [continent, setContinent] = useState("Continent");

const [image, setImage] = useState("Image");

//..................................//
const handlAdd = () =>{
    addCity({name,continent,image});
    handleClose();
};

return (
    <div>
      <Button variant="primary" onClick={handleShow}>
          Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new city</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="add city name" onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="continent">Continent</label>
            <input type="text" placeholder="add continent name" onChange={(e)=>setContinent(e.target.value)}/>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="add city name" onChange={(e)=>setImage(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlAdd}>
           add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
);
};
export default Add;

