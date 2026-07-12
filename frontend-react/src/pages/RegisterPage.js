import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>🏠 Bienvenido a la Tienda</h1>
      <p>Descubre nuestros productos y ofertas especiales</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/products">
          <button style={{ padding: '10px 20px', margin: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Ver Productos
          </button>
        </Link>
        <Link to="/login">
          <button style={{ padding: '10px 20px', margin: '10px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/register">
          <button style={{ padding: '10px 20px', margin: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;