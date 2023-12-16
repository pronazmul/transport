const baseUrl = 'http://localhost:5000/api/v1'

export async function login(payload) {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  return await handleResponse(response)
}

export async function register(payload) {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return await handleResponse(response)
}

// export async function logout() {
//   const response = await fetch(`http://localhost:8001/notes/${id}`, { signal })
//   return await handleResponse(response)
// }

export async function allUsers() {
  const response = await fetch(`${baseUrl}/users`)
  return await handleResponse(response)
}

async function handleResponse(response) {
  if (!response.ok) {
    const error = new Error('Error occured while fetching notes!')
    error.code = response.status
    error.message =
      error.code === 404 ? 'Something went wrong!' : await response.json()
    throw error
  }
  let res = await response.json()
  return res?.data
}
