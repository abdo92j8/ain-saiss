import React from 'react';
import '../assets/styles.css';

const products = [
  {
    id: 1,
    name: 'Ain Saiss Natural Water - 500ml',
    description: 'Pure natural water in a portable 500ml bottle, perfect for on-the-go hydration.',
    price: '5 MAD',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Ain Saiss Family Pack  --  6L',
    description: '6-liter family pack for long-lasting hydration at home.',
    price: '20 MAD',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Ain Saiss Premium Sparkling Water',
    description: 'Lightly sparkling water for a refreshing experience.',
    price: '10 MAD',
    image: 'https://via.placeholder.com/150',
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="product-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;