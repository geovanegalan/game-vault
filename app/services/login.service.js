const API_URL = 'http://localhost:3000/users';

class LoginService {
  async login(gamerTag, password) {
    const response = await fetch(`${API_URL}?gamerTag=${gamerTag}`);

    if (!response.ok) {
      throw new Error('Erro ao buscar usuário');
    }

    const users = await response.json();
    const user = users[0];

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (user.password !== password) {
      throw new Error('Senha incorreta');
    }

    return user;
  }
}

export const loginService = new LoginService();
