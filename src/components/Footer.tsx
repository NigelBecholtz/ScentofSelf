import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SCENT OF SELF</h3>
            <p className="tagline">"The scent that becomes you"</p>
            <p>Crafted to reflect who you are</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>DM us on Instagram to order</p>
            <p>@scentofselfperfumes</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Instagram: @scentofselfperfumes</p>
            <p>49 followers</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Scent of Self. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

