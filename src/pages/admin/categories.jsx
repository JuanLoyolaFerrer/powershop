import { useState, useEffect } from "react";
import useCategories from "@hooks/api/useCategories"
import useProducts from '@hooks/api/useProducts';

export default function AdminCategories() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const { GetCategorias } = useCategories()
  const { GetProducts } = useProducts()
  
  useEffect( () => {
    const fetchCategoria = async () => {
      try {
        const data = await GetCategorias()
        setCategories(data)

        const dataProd = await GetProducts()
        setProducts(dataProd);
      }
      catch (err) {
        console.error('Error al cargar productos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCategoria()
  }, []);

  useEffect(() => {
    console.log(filtered); // aquí ya está actualizado
  }, [filtered]);


  function SeleccionarProducto(e) {
    const filt = products.filter(p => p.Categorium?.id == e.target.value);
    setFiltered(filt)
  }

  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="app">
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>Cargando productos...</h2>
          <p>⏳ Por favor espera un momento</p>
        </div>
      </div>
    );
  }

  // Mostrar error si ocurre
  if (error) {
    return (
      <div className="app">
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>❌ Error al cargar productos</h2>
          <p>{error}</p>
          <button 
              className="cta-btn" 
              onClick={() => window.location.reload()}
              style={{ marginTop: '20px' }}
          >
          Reintentar
          </button>
        </div>
      </div>
    );
  }
  
  // Normal
  return (
    <div style={{ padding: "20px" }}>
      <ul style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        listStyle: 'none', 
        padding: 0 
      }}>
        {categories.map((category) => (
          // El atributo 'key' es OBLIGATORIO en React para listas. Usamos el 'id' único.
          <li key={category.id} style={{padding:"15px"}}>
            <div>
              <span style={{ fontSize:"16px" }}>#{category.id}</span>
              <h3>{category.nombre}</h3>
              <p>{category.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <select name="productos"
        id="productos"
        onChange={SeleccionarProducto}
        style={{
          marginBottom: "15px",
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #888",
          minWidth: "260px",
          background: "rgba(0,0,0,0.35)",
          color: "#fff",
        }}>
        <option value="" disabled selected>--ninguno--</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nombre}
          </option>
        ))}
      </select>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #555", padding: "8px" }}>Imagen</th>
            <th style={{ borderBottom: "1px solid #555", padding: "8px" }}>Nombre</th>
            <th style={{ borderBottom: "1px solid #555", padding: "8px" }}>Precio</th>
            <th style={{ borderBottom: "1px solid #555", padding: "8px" }}>Categoría</th>
            <th style={{ borderBottom: "1px solid #555", padding: "8px" }}>Destacado</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: "12px", textAlign: "center" }}>
                No hay productos
              </td>
            </tr>
          )}
          {filtered.map((p) => (
            <tr key={p.id}>
              <td style={{ borderBottom: "1px solid #333", padding: "8px" }}>
                {p.imagen ? (
                  <img src={p.imagen} alt={p.nombre} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }} />
                ) : (
                  <div style={{ width: "50px", height: "50px", background: "#444", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>📦</div>
                )}
              </td>
              <td style={{ borderBottom: "1px solid #333", padding: "8px" }}>
                {p.nombre}
              </td>
              <td style={{ borderBottom: "1px solid #333", padding: "8px" }}>
                ${Number(p.precio).toFixed(2)}
              </td>
              <td style={{ borderBottom: "1px solid #333", padding: "8px" }}>
                {p.Categorium?.nombre || "Sin categoría"}
              </td>
              <td style={{ borderBottom: "1px solid #333", padding: "8px" }}>
                {p.destacado ? "⭐ Sí" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};