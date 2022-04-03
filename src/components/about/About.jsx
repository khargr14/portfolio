import "./About.css"
import jlights from "../../img/jlights.jpg"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                 <div className="a-card bg"></div>
                 <div className="a-card">
                     <img src={jlights} 
                     alt="" 
                     className="a-img"/>
                 </div>
                </div> 
               
                <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Full Stack Web Developer
        </p>
        <p className="a-desc">
        Passionate, creative, and analytical developer seeking a challenging environment. 5+ years of experience in management, business decision making, and customer service.

Dedicated Full Stack Engineer with extensive training in gathering, designing, coding, testing, debugging, and maintaining all phases of software development. Flexible and quick to learn with a positive attitude.
        </p>
        
      </div>
    </div>
  );
};


export default About