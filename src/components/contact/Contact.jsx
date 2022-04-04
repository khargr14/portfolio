import "./contact.css";
import Github from "../../img/Github.png";
import Linkedin from "../../img/Linkedin.png";
import Blog from "../../img/Blog.jpg";
import { useContext, useRef, useState } from "react";
 import emailjs from "emailjs-com";
// netlifyimport{ init } from '@emailjs/browser';
// init("ddlYP7ARS5lTizbPo");
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wupexzf",
        "template_rnwpk1f",
        formRef.current,
        "user_ddlYP7ARS5lTizbPo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
            <a href="https://github.com/khargr14">
              <img src={Github} alt="" className="c-icon" />
            </a>
            </div>
            <div className="c-info-item">
            <a href="https://www.linkedin.com/in/keeshahargrove/">
          <img className="c-icon" src={Linkedin} alt="" />
         </a>

            </div>
            <div className="c-info-item">
            <a href="https://medium.com/@kharg14">
              <img className="c-icon" src={Blog} alt="" />
              </a>
              
            </div>
          </div>
        </div>
        
      </div>

      {/* <a href='Keesha-Hargrove-Resume.net.pdf' download='Keesha Hargrove Resume.pdf'> </a>
          <button >get resume</button> */}

        
              


    </div>
  );
};

export default Contact;