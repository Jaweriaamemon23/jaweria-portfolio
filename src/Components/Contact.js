import Form from 'react-bootstrap/Form';
export default function Contactus(){

 


return (
<>
<h1 className='contact-section'>Contact us:</h1>
<br></br>
<Form className='pr-section'>
  
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="e.g John" />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      
      <button type="submit" class="btn btn-primary">Submit</button>
                    
    </Form>
</>
);

}
