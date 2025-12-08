import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Contact Bar */}
      <div className="footer-top">
        <div className="contact-item">
          <div className="icon">📍</div>
          <div>
            <span className="label">Address:</span>
            <p>1925 Boggess Street</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon">📞</div>
          <div>
            <span className="label">Phone:</span>
            <p>(00) 875 784 568</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon">✉️</div>
          <div>
            <span className="label">Email:</span>
            <p>info@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-col brand">
          <h2 className="logo">edunity</h2>
          <p>
            Interdum velit laoreet id donec ultrices tincidunt arcu.
            Tincidunt tortor aliquam.
          </p>

          <div className="socials">
            <span>f</span>
            <span>◎</span>
            <span>p</span>
            <span>🐦</span>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services:</h3>
          <ul>
            <li>› Web Development</li>
            <li>› UI/UX Design</li>
            <li>› Management</li>
            <li>› Digital Marketing</li>
            <li>› Blog News</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="footer-col">
          <h3>Gallery</h3>
          <div className="gallery">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/80/80?random=${i}`}
                alt="gallery"
              />
            ))}
          </div>
        </div>

        {/* Subscribe */}
        <div className="footer-col">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Enter your email:" />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        Copyright © 2024 <span>edunity</span> | All Rights Reserved
      </div>
    </footer>
  );
}
