import { Modal } from "bootstrap";
import react, {useState} from 'react' ;

function AddMovie({getNewMovie}) {
      const[sow, setShow] = useState(false);

      const handleClose = ( ) => setShow(false);
      const handleShow = ( ) => setShow(true);

      const [newMovie, setNewMovie] = useState ({title:"",description:"",posterUrl:"",rating:""})
      
      const handleChange = (e) => {
        setNewMovie ({...newMovie,  [e.target.name]:  e.target.value})
      }

      const handleSubmit = () => {
           setNewMovie({...moviesData, newMovie}) ;
      } ;
      return (
          <>
               <Button variant="primary" onClick={handleShow}>
                     Add a new Movie
               </Button>

               <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButon>
                               <Modal.Title>enter your new movie ...</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form.Control type="text" placeholder="enter title ..." name="title" onChange={handleChange}/> 
                        <Form.Control type="text" as "textarea" placeholder="enter description..." name="description" onChange={handleChange}/> 
                        <Form.Control type="text" placeholder="enter posterUrl ... " name="posterUrl" onChange={handleChange}/> 
                        <Form.Control type="number" placeholder="enter rating ..." name="rating" onChange={handleChange}/>  
                     </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                              close
                         </Button>
                         <Button variant="primary" onClick={handleSubmit}>
                             Add Movie
                         </Button>
                      </Modal.Footer>
               
               </Modal>
          </>
      );
}

export default AddMovie