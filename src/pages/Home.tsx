import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Home.css'

const Home = () => {
  const featuredProduct = products.find(p => p.featured)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content-center">
            <div className="hero-badge">Scent of Self — Est. 2025</div>
            <h1 className="hero-title">
              <span className="hero-title-line">The Scent</span>
              <span className="hero-title-line">That Becomes</span>
              <span className="hero-title-line hero-title-accent">You</span>
            </h1>
            <p className="hero-description">
              Discover fragrances that reflect your unique identity.<br />
              Each scent tells a story — your story.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="hero-btn hero-btn-primary">
                Explore Collection
                <span className="hero-btn-arrow">→</span>
              </Link>
              <a href="https://instagram.com/scentofselfperfumes" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
                <span className="hero-instagram-icon">📸</span>
                Follow Us
              </a>
            </div>
            
            <div className="hero-features">
              <div className="hero-feature">
                <div className="hero-feature-icon">✦</div>
                <div className="hero-feature-text">
                  <div className="hero-feature-title">Handcrafted</div>
                  <div className="hero-feature-desc">Made with care</div>
                </div>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">♡</div>
                <div className="hero-feature-text">
                  <div className="hero-feature-title">Unique</div>
                  <div className="hero-feature-desc">Your personal scent</div>
                </div>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">✧</div>
                <div className="hero-feature-text">
                  <div className="hero-feature-title">Premium</div>
                  <div className="hero-feature-desc">Luxury ingredients</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="hero-decoration">
            <div className="hero-circle hero-circle-1"></div>
            <div className="hero-circle hero-circle-2"></div>
            <div className="hero-circle hero-circle-3"></div>
            <div className="hero-line hero-line-1"></div>
            <div className="hero-line hero-line-2"></div>
            <div className="hero-sparkle hero-sparkle-1">✦</div>
            <div className="hero-sparkle hero-sparkle-2">✧</div>
            <div className="hero-sparkle hero-sparkle-3">✦</div>
            <div className="hero-sparkle hero-sparkle-4">✧</div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="brand-story">
        <div className="container">
          <div className="story-content">
            <h2>Your Signature Scent</h2>
            <p>
              At Scent of Self, we believe that fragrance is more than just a scent—it's an 
              extension of your identity. Each of our carefully crafted perfumes is designed 
              to capture the essence of individuality, allowing you to express yourself in 
              the most authentic way.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      {featuredProduct && (
        <section className="featured-product">
          <div className="container">
            <div className="featured-grid">
              <div className="featured-image">
                <img src={featuredProduct.images[0]} alt={featuredProduct.name} />
              </div>
              <div className="featured-info">
                <span className="featured-label">Featured</span>
                <h2>{featuredProduct.name}</h2>
                <p className="featured-description">{featuredProduct.description}</p>
                <p className="featured-price">€{featuredProduct.price.toFixed(2)}</p>
                <Link to={`/product/${featuredProduct.id}`} className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>DM to Order</h2>
            <p>Connect with us on Instagram @scentofselfperfumes</p>
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

