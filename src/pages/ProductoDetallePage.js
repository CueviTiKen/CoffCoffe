import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductoDetallePage = () => {
  const { id } = useParams();        
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://mock.apidog.com/m1/885057-866738-default/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar detalle:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={styles.loading}>Cargando detalle...</div>;
  if (!producto) return <div style={styles.error}>Producto no encontrado.</div>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{producto.nombre}</h2>
        <div style={styles.info}>
          <div style={styles.precio}>€{producto.precio}</div>
          <p style={styles.descripcion}>{producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: 'var(--color-background)'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '40px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  title: {
    color: 'var(--color-text)',
    fontSize: '2.5rem',
    marginBottom: '30px',
    textAlign: 'center'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  precio: {
    fontSize: '2rem',
    color: 'var(--color-primary)',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descripcion: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666',
    textAlign: 'center'
  },
  button: {
    marginTop: '20px',
    fontSize: '1.2rem',
    padding: '15px 30px',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'var(--color-secondary)',
      transform: 'translateY(-2px)'
    }
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: 'var(--color-text)'
  },
  error: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: 'var(--color-text)'
  }
};

export default ProductoDetallePage;
