import React, { useState, useEffect } from 'react';
import useTitulo from '../hooks/useTitulo';

const MisPedidosPage = () => {
  useTitulo('Mis Pedidos | CoffCoffee');
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = 1;

    fetch(`https://mock.apidog.com/m1/885057-866738-default/usuarios/${userId}/pedidos`)
      .then((res) => res.json())
      .then((data) => {
        setPedidos(data.pedidos || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener pedidos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={styles.loading}>Cargando pedidos...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Mis Pedidos</h1>
        {pedidos.length === 0 ? (
          <div style={styles.emptyState}>
            <p>No tienes pedidos todavía.</p>
            <p style={styles.suggestion}>¡Explora nuestra selección de cafés premium!</p>
          </div>
        ) : (
          <div style={styles.pedidosList}>
            {pedidos.map((pedido, index) => (
              <div 
                key={pedido.id} 
                style={{
                  ...styles.pedidoCard,
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div style={styles.pedidoHeader}>
                  <h3 style={styles.pedidoId}>Pedido #{pedido.id}</h3>
                  <span style={styles.fecha}>{pedido.fecha}</span>
                </div>
                <div style={styles.pedidoDetails}>
                  <p style={styles.estado}>Estado: {pedido.estado || 'En proceso'}</p>
                  <p style={styles.total}>Total: €{pedido.total || '0.00'}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: 'var(--color-background)',
    padding: '40px 20px'
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    color: 'var(--color-text)',
    fontSize: '2.5rem',
    marginBottom: '40px',
    textAlign: 'center',
    fontFamily: 'Playfair Display, serif'
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: 'var(--color-text)'
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  suggestion: {
    color: 'var(--color-primary)',
    marginTop: '10px',
    fontSize: '0.9rem'
  },
  pedidosList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  pedidoCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)'
    }
  },
  pedidoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px'
  },
  pedidoId: {
    margin: 0,
    color: 'var(--color-primary)',
    fontSize: '1.2rem'
  },
  fecha: {
    color: '#666',
    fontSize: '0.9rem'
  },
  pedidoDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  estado: {
    margin: 0,
    color: 'var(--color-text)'
  },
  total: {
    margin: 0,
    fontWeight: 'bold',
    color: 'var(--color-primary)'
  }
};

export default MisPedidosPage;
