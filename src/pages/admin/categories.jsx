import products from "../../components/products/productList/productList";

export default function AdminCategories() {
    const categories = products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
    <div style={{ padding: "20px" }}>
      {Object.keys(categories).map((category) => (
        <section key={category} style={{ marginBottom: "40px" }}>
          
          <h2 style={{ marginBottom: "10px" }}>{category}</h2>

          <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Destacado</th>
              </tr>
            </thead>

            <tbody>
              {categories[category].map((product) => (
                <tr key={product.id}>
                  <td>{product.image}</td>
                  <td>{product.name}</td>
                  <td>S/ {product.price}</td>
                  <td>{product.featured ? "Sí" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </section>
      ))}
    </div>
  );
};