export async function fetchUser(userName: string) {
  const url = `https://api.github.com/users/${userName}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Erro ao buscar usuário")
    }

    return data
  } catch (e) {
    console.error("Ocorreu um erro ao buscar os dados:", e)
    return null
  }
}
