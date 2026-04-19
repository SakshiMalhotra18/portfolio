import { useEffect, useRef } from "react";
import "./styles/Career.css";

const Career = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const characterModel = document.querySelector(
      ".character-model"
    ) as HTMLElement | null;
    if (!characterModel) return;

    const handleMouseEnter = () => {
      characterModel.classList.add("character-model-hidden");
    };
    const handleMouseLeave = () => {
      characterModel.classList.remove("character-model-hidden");
    };

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="career-section section-container" ref={sectionRef}>
      <div className="career-container">
        <h1 className="career-bg-text">EXPERIENCE</h1>
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Engineer – Data Science & Automation</h4>
                <h5>HCL Technologies (Client: Microsoft)</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Engineered hybrid ML forecasting models and automated ETL pipelines to process petabyte-scale infrastructure data for global datacenter capacity planning. Improved power allocation accuracy by 15–20% and reduced data latency by 35%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer – Data Scientist</h4>
                <h5>HCL Technologies (Client: Microsoft)</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Built a hybrid forecasting model improving power-allocation accuracy by 21%. Designed Databricks ML pipelines using ARIMA and Seq2Seq. Implemented automated Power BI dashboards, eliminating 4–6 hours of manual reporting per week.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer – Data Engineering</h4>
                <h5>HCL Technologies (Client: Axalta)</h5>
              </div>
              <h3>2022 - 2024</h3>
            </div>
            <p>
              Built and maintained Informatica MDM pipelines integrated with SAP, AWS S3, and Oracle SQL. Optimized ETL pipelines and reporting workflows, improving overall data processing efficiency by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>HCL Technologies</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Developed internal applications using SQL, Java, Angular, and Node.js, achieving &gt;90% code-review pass rate across all deliverables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
