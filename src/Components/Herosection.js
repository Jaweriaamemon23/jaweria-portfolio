import picture from "../Assets/Images/Rectangle 32.png"

export default function Herosection(){
    return (
<>
<div class="container hero-section">
   <div class="row">
<div class="col col-lg-6 col-sm-12 col-md-6">
<h3>Hello! I am</h3>
<h1 className="title-section"><b>Jaweria Saleem</b></h1>

<h5>Software Engineer</h5>
<br></br>
<p>As a dedicated software engineering Student, I've cultivated proficiency in C++, Java, Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), Linux, Ubuntu, and Database Management Systems (DBMS). My web development skills encompass HTML, CSS, Bootstrap, and WordPress. I've substantiated my capabilities through a rewarding summer internship experience, showcasing my practical prowess.</p>

</div>

<div class="col col-lg-6 col-sm-12 col-md-6 picture">
  <img src={picture} alt="Profile"></img>

</div>

   </div>
</div>

</>
    );
}