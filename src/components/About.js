import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am a <b>Computer Science Engineer (AI-ML)</b> graduated from{" "}
        <b>SRM University</b> in 2026 with a CGPA of <b>8.31</b>. I am passionate
        about <b>Software Engineering</b> and{" "}
        <b>Artificial Intelligence / Machine Learning</b>.
      </p>
    );
    const two = (
      <p>
        I enjoy building impactful projects and constantly learning new
        technologies. I'm actively looking for opportunities where I can
        contribute, grow, and make a difference.
      </p>
    );

    const tech_stack = [
      "Python",
      "MySQL",
      "Java",
      "TensorFlow",
      "Machine Learning",
      "MediaPipe",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Manvendra Singh Solanki" src={"/assets/me2.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;