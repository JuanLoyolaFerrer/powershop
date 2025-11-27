export default function useProducts() {
  const URL = "http://localhost:3000";

  async function GetProducts() {
    const response = await fetch(URL+'/products');
    if (!response.ok) {
        throw new Error('Error al cargar los productos');
    }
    const data = await response.json();
    return data
  }

  async function CreateProduct(payload) {
    const response = await fetch(URL+"/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: payload
    });
    return response
  }

  async function DeleteProduct(id) {
    const response = await fetch(`${URL}/products/${id}`, {
        method: "DELETE"
    });
    return response
  }

  return { GetProducts, CreateProduct, DeleteProduct }
}