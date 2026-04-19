import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        <h3 className="contact-title">LET'S <span>CONNECT</span></h3>
        <div className="contact-grid">
          <div className="contact-card glass">
            <h4>Direct Email</h4>
            <p>
              <a href="mailto:sakshi.malhotra.connect@gmail.com" data-cursor="disable">
                sakshi.malhotra.connect@gmail.com
              </a>
            </p>
          </div>
          
          <div className="contact-card glass">
            <h4>Professional Links</h4>
            <div className="social-grid">
              <a href="https://linkedin.com/in/sakshi-malhotra18/" target="_blank" className="contact-social">
                Linkedin <MdArrowOutward />
              </a>
              <a href="mailto:sakshi.malhotra.connect@gmail.com" className="contact-social">
                Gmail <MdArrowOutward />
              </a>
            </div>
          </div>

          <div className="contact-footer glass">
            <h2>
              Designed and Developed <br /> by <span>Sakshi Malhotra</span>
            </h2>
            <h5>
              <MdCopyright /> 2024 | Data Scientist & Engineer
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
