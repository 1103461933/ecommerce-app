import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          name: name.trim(), 
          email: email.trim(), 
          password: password 
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message || 'Error al registrar usuario');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Registrarse</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: '10px' }}>¡Registro exitoso!</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Confirmar Contraseña:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;