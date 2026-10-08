import building from "../assets/building.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(7,31,55,0.90),
            rgba(7,31,55,0.68),
            rgba(7,31,55,0.25)
          ),
          url(${building})
        `
      }}
    >
      <div className="container hero-content">
        <div className="hero-badge">🏫 A Growing School Community</div>
        <h1>Where <span>Knowledge</span> Builds The Future.</h1>
        <p>
          Shri Jai Ram Ganga Ram Smart School is committed to giving children
          a strong educational foundation, good values, confidence and a
          caring environment in which they can learn and grow.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">Discover Our School</a>
          <a href="#contact" className="btn btn-outline">Contact School</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;