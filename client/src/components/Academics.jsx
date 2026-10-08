import {
  FaSeedling,
  FaBookOpen,
  FaGraduationCap
} from "react-icons/fa";

function Academics() {
  const programs = [
    {
      icon: <FaSeedling />,
      title: "Nursery & Early Years",
      description:
        "A warm start focused on language, basic concepts, social development, creativity and learning through activities."
    },
    {
      icon: <FaBookOpen />,
      title: "Classes 1–3",
      description:
        "Building strong foundations in literacy, numeracy, general awareness, communication and classroom learning habits."
    },
    {
      icon: <FaGraduationCap />,
      title: "Classes 4–5",
      description:
        "Strengthening subject knowledge, independent thinking, confidence and readiness for the next level of education."
    }
  ];

  return (
    <section id="academics" className="section programs">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Academics</div>
          <h2>Learning that grows with the child.</h2>
          <p>
            Our early and primary years are designed to develop confidence,
            curiosity and the core skills children need for their next stage of learning.
          </p>
        </div>

        <div className="cards">
          {programs.map((program) => (
            <article className="card" key={program.title}>
              <div className="card-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academics;