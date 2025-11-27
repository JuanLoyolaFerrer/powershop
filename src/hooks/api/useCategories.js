export default function useCategories() {
  const URL = "http://localhost:3000";

  async function GetCategorias() {
    const response = await fetch(URL + "/categorias");
    const data = await response.json();
    return data;
  }

  async function CreateCategoria(payload) {
    const response = await fetch(URL + "/categorias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: payload
    });
    return response;
  }

  async function DeleteCategoria(id) {
    const response = await fetch(`${URL}/categorias/${id}`, {
      method: "DELETE"
    });
    return response;
  }

  return { GetCategorias, CreateCategoria, DeleteCategoria }
}