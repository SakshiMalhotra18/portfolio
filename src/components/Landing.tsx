import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              <div className="name-line">SAKSHI</div>
              <div className="name-line">MALHOTRA</div>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Senior Specialist in</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Data Science</div>
              <div className="landing-h2-2">Data Engineering</div>
            </h2>
            <h2 className="landing-info-h2-sub">
              <div className="landing-h2-info">Engineering Lead</div>
              <div className="landing-h2-info-1">ML Solutions</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
