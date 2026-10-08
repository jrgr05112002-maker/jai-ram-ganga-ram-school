function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Shri Jai Ram Ganga Ram Smart School</h3>
          <p>विद्या • ज्ञान • प्रगति</p>
        </div>

        <div>
          <p>Nursery to Class 5</p>
          <p>
            Phirni Road, Village Mullanpur Garibdass,
            Dist. SAS Nagar
          </p>
          <p>
            📞 9417032880 • 75083 76744 • 8847695799
          </p>
          <p>✉️ shrijairamgangaram@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Shri Jai Ram Ganga Ram Smart School
        </div>
      </div>
    </footer>
  );
}

export default Footer;