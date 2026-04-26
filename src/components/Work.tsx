import "./styles/Work.css";
import WorkImage from "./WorkImage";
const Work = () => {
  const projects = [
    { 
      title: "RevAgent — Revenue Intelligence Agent", 
      category: "AI Agent · Full-Stack", 
      tools: "Python · pandas · FastAPI · Next.js 14 · TypeScript · Tailwind · Recharts · Groq LLM · DuckDB",
      highlight: "Automates \"why did our numbers move?\" — detects anomalies across 500K+ rows of ecommerce data and generates LLM-powered root cause reports with confidence scores",
      status: "🚧 Under Construction",
      github: "https://github.com/SakshiMalhotra18",
      initials: "RA"
    },
    { 
      title: "AI Voice Receptionist — Clove Dental", 
      category: "Voice AI · Conversational Agent", 
      tools: "Vapi (Riley) · LLM · Prompt Engineering · Voice + Chat",
      highlight: "Production-ready dental booking agent — handles phone normalization (\"double 4\" → 44), date parsing (\"tomorrow 8 AM\" → absolute datetime), strict validation, and converts every call into structured backend-ready JSON",
      status: "🎙️ Voice AI",
      live: "https://youtu.be/QprvdWT5qEE",
      video: "demo.mp4",
      github: "https://github.com/SakshiMalhotra18/clove-dental-voice-agent",
      initials: "CD"
    },
    { 
      title: "Vishwajna Puratan GPT", 
      category: "Generative AI · Custom GPT", 
      tools: "OpenAI GPT Builder · Prompt Engineering",
      highlight: "Custom GPT delivering answers from Hindu mythology, Vedas, Puranas, Ramayana, and Mahabharata in a humble, spiritual tone",
      live: "https://chatgpt.com/g/g-6795d4491a5881919d37758d5cf1c18c-vishwajna-puratan",
      github: "https://github.com/SakshiMalhotra18/Vishwajna-puratan-gpt",
      initials: "VP"
    },
    { 
      title: "COVID-19 Insights Lab", 
      category: "Data Science · Machine Learning", 
      tools: "Python · Pandas · Scikit-learn · Statsmodels · Prophet · Streamlit · Matplotlib · Seaborn",
      highlight: "6-project data science lab covering EDA, regression, classification, time series forecasting (ARIMA/Prophet), KMeans clustering, and an interactive Streamlit dashboard — all on real COVID-19 global data",
      github: "https://github.com/SakshiMalhotra18/Covid19-insights",
      initials: "C19"
    },
    { 
      title: "Smile Detection", 
      category: "Computer Vision", 
      tools: "Python · OpenCV",
      highlight: "Real-time facial smile detection using computer vision",
      github: "https://github.com/SakshiMalhotra18/Smile-Detection",
      initials: "SD"
    },
    { 
      title: "Graph Classifier", 
      category: "Machine Learning · Graph ML", 
      tools: "Python · Jupyter Notebook",
      highlight: "Graph-based classification model",
      github: "https://github.com/SakshiMalhotra18/GraphClassifier",
      initials: "GC"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className="work-impact-container">
                  <p className="work-highlight">{project.highlight}</p>
                </div>
                <div className="work-tech-section">
                  <div className="work-tech-tags">
                    {project.tools.split(/ · |, | - /).map(tool => (
                      <span className="tech-tag" key={tool}>{tool.trim()}</span>
                    ))}
                  </div>
                </div>
                <div className="work-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn-link">GitHub ↗</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="btn-link">Live ↗</a>}
                </div>
              </div>
              <WorkImage initials={project.initials} alt={project.title} status={project.status} video={project.video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
