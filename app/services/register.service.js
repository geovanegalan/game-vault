const API_URL = 'http://localhost:3000/users';

class UserService {
  async registerUser(newUser) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Error to register user!');
    }
    return await response.json();
  }
}

export const userService = new UserService();
