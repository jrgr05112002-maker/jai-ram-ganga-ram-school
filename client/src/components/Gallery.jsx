import building from "../assets/building.jpg";
import students from "../assets/students.jpg";
import news from "../assets/news.jpg";

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">School Life</div>
          <h2>Real moments from our school.</h2>
          <p>
            A glimpse of the campus and the children who make our school community special.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-main">
            <img src={students} alt="Students and teachers" />
            <p>Students and teachers celebrating together.</p>
          </div>

          <div className="gallery-side">
            <div>
              <img src={building} alt="School building" />
              <p>Our school campus.</p>
            </div>
            <div>
              <img src={news} alt="School newspaper coverage" />
              <p>A school event featured in the local press.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;