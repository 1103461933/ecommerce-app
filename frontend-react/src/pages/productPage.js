import React, { useState, useEffect } from 'react';
import { productService } from '../api/productService';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Cargando...</div>;
  return (
    <div>
      <h2>Productos</h2>
      {products.map((p) => (
        <div key={p.id}><h3>{p.name}</h3><p>{p.description}</p><p>${p.price}</p></div>
      ))}
    </div>
  );
};
export default ProductsPage;
