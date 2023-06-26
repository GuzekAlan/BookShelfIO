interface UserData {
  username: string
  email: string
  phone_number: string
  password: string
  first_name: string
  last_name: string
}

interface LoginData {
  username: string
  password: string
}

export const registerUser = (userData: UserData) => {
  const url = "https://bookshelf.bochenek.net.pl:8000/user/register"
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
}

export const loginUser = (userData: LoginData) => {
  const url = "https://bookshelf.bochenek.net.pl:8000/user/login"
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
}