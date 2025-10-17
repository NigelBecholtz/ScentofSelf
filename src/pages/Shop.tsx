import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Shop.css'

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop-header">
          <h1>Our Collection</h1>
          <p>Discover your signature scent</p>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className="product-card"
            >
              <div className="product-image">
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">€{product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop

