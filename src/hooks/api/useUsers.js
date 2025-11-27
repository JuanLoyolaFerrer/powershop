export default function useUsers() {
  const URL = "http://localhost:3000";

  async function LoginUser(body) {
    // Usar el endpoint de login que valida con bcrypt
    const response = await fetch(URL + '/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || 'Error al iniciar sesión');
    }

    const usuario = await response.json();
    console.warn(usuario)
    return usuario
  }



  return {LoginUser}
}