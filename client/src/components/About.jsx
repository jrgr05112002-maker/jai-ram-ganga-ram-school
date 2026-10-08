import building from "../assets/building.jpg";

function About() {
  const features = [
    "Caring environment",
    "Strong foundations",
    "Individual attention",
    "Values & discipline"
  ];

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-content">
          <div className="eyebrow">About the School</div>
          <h2>A strong beginning for every child.</h2>
          <p>
            Shri Jai Ram Ganga Ram Smart School is a growing school serving
            children from Nursery to Class 5.
          </p>
          <p>
            Our focus is on creating a safe, disciplined and encouraging
            environment where children can develop academically as well as personally.
          </p>
          <p>
            With dedicated teachers and a close-knit school community, we aim
            to build strong foundations in reading, writing, mathematics,
            communication, curiosity and values.
          </p>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature" key={feature}>✓ {feature}</div>
            ))}
          </div>
        </div>

        <div className="image-card">
          <img src={building} alt="School campus" />
        </div>
      </div>
    </section>
  );
}

export default About;