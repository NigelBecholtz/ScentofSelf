import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()

  const [selectedSize, setSelectedSize] = useState(product?.sizes[1] || '')
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      quantity,
      size: selectedSize,
      image: product.images[0],
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/shop" className="back-link">
          ← Back to Shop
        </Link>

        <div className="product-detail-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[currentImage]} alt={product.name} />
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="product-price">€{product.price.toFixed(2)}</p>
            <p className="tax-info">Tax included</p>

            <div className="product-description">
              <p>{product.longDescription}</p>
            </div>

            {/* Size Selection */}
            <div className="size-selector">
              <label>Size</label>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <label>Quantity</label>
              <div className="quantity-controls">
                <button onClick={decreaseQuantity} className="quantity-btn">−</button>
                <span className="quantity-value">{quantity}</span>
                <button onClick={increaseQuantity} className="quantity-btn">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button 
                onClick={handleAddToCart} 
                className="btn btn-primary add-to-cart-btn"
                disabled={!selectedSize}
              >
                {addedToCart ? 'Added! ✓' : 'Add to Cart'}
              </button>
            </div>

            {/* Share */}
            <div className="share-section">
              <p className="share-label">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

