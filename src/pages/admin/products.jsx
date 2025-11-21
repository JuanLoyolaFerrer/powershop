import products from "../../components/products/productList/productList";

export default function AdminProducts() {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }} border="1" cellPadding="6">
        <thead>
            <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Destacado</th>
            </tr>
        </thead>

        <tbody>
            {products.map(p => (
            <tr key={p.id}>
                <td>{p.image}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.featured ? "Sí" : "No"}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};