import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const projects = {
      "Nexus": {
        desc:
          "An AI-powered vector database with HNSW indexing achieving O(log N) search over 768-dimensional LLM embeddings, replicating core logic of Pinecone & Weaviate. Features a local RAG pipeline and live AI benchmarking dashboard.",
        techStack: "Python, C++, HNSW, KD-Tree, RAG Pipeline, Ollama, FastAPI, PCA",
        link: "https://github.com/manvendra5345/Nexus",
        open: "",
      },
      "Deep Packet Inspector": {
        desc:
          "A Python-based multi-threaded DPI engine across a 4-stage pipeline using thread-safe queues and O(1) 5-tuple hashing. Implements TCP/IP stack parsing across 4 network layers with SNI extraction to classify HTTPS traffic.",
        techStack: "Python, Java, Multithreading, DPI, PyTest, Claude",
        link: "https://github.com/manvendra5345/deep_packet_analyzer",
        open: "",
      },
      "SERENE": {
        desc:
          "An end-to-end AI sign language recognition system integrating MediaPipe for real-time hand-landmark extraction and a trained Random Forest classifier for gesture recognition, delivering sub-second translation for 466M+ users.",
        techStack: "Python, MediaPipe, OpenCV, Random-Forest, TensorFlow",
        link: "https://github.com/manvendra5345/Serene",
        open: "",
      },
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;