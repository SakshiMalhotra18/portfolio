import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <div className="title-wrapper">
          <h2 className="title">
            W<span className="hat-h2">HAT</span><br/>
            I<span className="do-h2"> DO</span>
          </h2>
          <p className="what-desc">
            Transforming complex data into actionable insights through robust
            engineering and advanced analytics.
            <br /><br />
            I build intelligent AI agents, custom LLM solutions, and scalable full-stack applications that solve real-world problems.
            <br /><br />
            My goal is to bridge the gap between raw data and seamless, user-centric automated systems.
          </p>
        </div>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          {/* Removed dashed borders */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            {/* Removed internal dashed borders and corners */}

            <div className="what-content-in">
              <h3>DATA ENGINEERING</h3>
              <h4>Description</h4>
              <p>
                Design and implement scalable ETL/ELT pipelines using Azure Synapse, Databricks, and ADF to process petabyte-scale data with reduced latency.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Azure Databricks</div>
                <div className="what-tags">Azure Synapse</div>
                <div className="what-tags">Azure Data Factory</div>
                <div className="what-tags">AWS S3</div>
                <div className="what-tags">Spark</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Informatica MDM</div>
                <div className="what-tags">GCP</div>
                <div className="what-tags">Azure DevOps</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            {/* Removed internal dashed borders and corners */}
            <div className="what-content-in">
              <h3>DATA SCIENCE</h3>
              <h4>Description</h4>
              <p>
                Build hybrid ML forecasting models using Time Series (ARIMA, Seq2Seq) and other statistical metrics to improve allocation accuracy and precision.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Time Series Forecasting</div>
                <div className="what-tags">Regression</div>
                <div className="what-tags">Clustering</div>
                <div className="what-tags">Anomaly Detection</div>
                <div className="what-tags">Deep Learning</div>
                <div className="what-tags">NLP</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">R</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-content-in">
              <h3>AI & GEN AI</h3>
              <h4>Description</h4>
              <p>
                Build autonomous LLM-powered agents, custom GPTs, and intelligent voice assistants to automate workflows and data extraction.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">LLMs</div>
                <div className="what-tags">OpenAI</div>
                <div className="what-tags">Groq</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Voice AI</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">Vector Databases</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-content-in">
              <h3>FULL-STACK DEV</h3>
              <h4>Description</h4>
              <p>
                Create scalable web applications and interactive dashboards with modern frontend frameworks and efficient backend APIs.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Next.js</div>
                <div className="what-tags">React</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">DuckDB</div>
                <div className="what-tags">Streamlit</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
