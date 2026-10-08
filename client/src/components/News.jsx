import news from "../assets/news.jpg";

function News() {
  return (
    <section id="news" className="news-section">
      <div className="container news-grid">
        <div>
          <span className="news-badge">School Community</span>
          <h2>Learning, celebrations and shared memories.</h2>
          <p>
            From school celebrations to classroom experiences, our students
            get opportunities to participate, express themselves and learn together.
          </p>
        </div>

        <div>
          <img src={news} alt="School event newspaper article" />
        </div>
      </div>
    </section>
  );
}

export default News;