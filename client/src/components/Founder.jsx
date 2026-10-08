import founder from "../assets/founder.jpg";

function Founder() {
  return (
    <section id="founder" className="section founder-section">
      <div className="container founder-grid">
        <div className="founder-image-wrapper">
          <img src={founder} alt="Sh. Ujjagar Singh Saini" />
        </div>

        <div className="founder-content">
          <div className="eyebrow">Our Founder</div>
          <h2>A vision rooted in education and progress.</h2>
          <h3>Sh. Ujjagar Singh Saini</h3>
          <div className="qualification">M.A., LL.B.</div>

          <p>
            Sh. Ujjagar Singh Saini is the founder of Shri Jai Ram Ganga Ram Smart School.
          </p>
          <p>
            The school carries forward a vision in which education, knowledge
            and progress form the foundation of a child's future.
          </p>

          <div className="founder-quote">
            “विद्या • ज्ञान • प्रगति”
            <br />
            <small>Education • Knowledge • Progress</small>
          </div>

          <p>
            The school's identity and motto reflect a commitment to learning,
            character and continuous growth for every student.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Founder;