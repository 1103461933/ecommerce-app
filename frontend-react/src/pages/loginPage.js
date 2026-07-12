import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../api/userService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.login({ email, password });
      localStorage.setItem('authToken', response.token);
      navigate('/products');
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div><label>Email:</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
        <div><label>Contraseña:</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
export default LoginPage;