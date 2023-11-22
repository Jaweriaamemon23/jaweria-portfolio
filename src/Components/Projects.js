import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Projects= () =>{
    return(
<>
<br></br>
<div class="container">
    <div class="row">

    <div className='col-lg-6 col-sm-12'>
<h1 className='pr-section'><b>Projects:</b></h1>
</div>

<div className='col-lg-6 col-sm-12'>
<Button variant="secondary">View all projects</Button>
</div>
<br></br>
<br></br>
<div class="col-lg-4 col-sm-6 col-md-4 pt-4">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>ADRESS BOOK SYSTEM</Card.Title>
        <Card.Text>
        I developed an Address Book System project in Java, showcasing efficient contact management using linked lists. It includes essential features like insertion, sorting, updates, and search capabilities, strengthening my Java programming skills and data structure expertise.
        </Card.Text>
        <br></br>
        <br></br>
        <Button variant="primary">Check it out</Button>
      </Card.Body>
    </Card>
    
</div>
<div class="col-lg-4 col-sm-6 col-md-4 pt-4">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>NUMBER GUSSING GAME</Card.Title>
        <Card.Text>
        A number guessing game challenges players to guess a hidden number within a predefined range, commonly 1 to 100. Players receive feedback after each guess, guiding them to the correct answer. With a limited number of attempts, it combines strategy, deduction, and excitement for an engaging and quick-paced experience.
        </Card.Text>
        <br></br>
        <Button variant="primary">Check it out</Button>
      </Card.Body>
    </Card>
</div>
    <div class="col-lg-4 col-sm-6 col-md-4 pt-4">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>STUDENT MANAGEMENT SYSTEM</Card.Title>
        <Card.Text>
        this Users can add, remove, search, and display student details through a menu-driven interface. It employs two classes, 'StudentManagement' for operations and 'Student' to define student attributes. Users provide input, and the program responds accordingly within a looping structure until the exit option is chosen.
        </Card.Text>
        <Button variant="primary">Check it out</Button>
      </Card.Body>
    </Card>
</div>

    </div>
</div> 
</>

    );

}


export default Projects;

