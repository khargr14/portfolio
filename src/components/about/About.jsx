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
          I need something here
        </p>
        <p className="a-desc">
          I need more here
        </p>
        
      </div>
    </div>
  );
};


export default About