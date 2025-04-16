import { AccessDeniedError } from '@/services/common/httpError';

interface User {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
}

interface LoginResponse {
  user: User;
  sessionId: string;
  expireAt: Date;
}

class AuthService {
  async authenticate(email: string, password: string): Promise<LoginResponse> {
    
    if (email && password) {
        if (!email.includes('@')) {
        throw new AccessDeniedError('Formato de correo electrónico inválido');
      }
      
      if (password.length < 6) {
        throw new AccessDeniedError('Credenciales inválidas');
      }
      
      const username = email.split('@')[0];
      
      return {
        user: {
          id: `user_${Date.now()}`,
          email,
          username,
        },
        sessionId: `session_${Date.now()}`,
        expireAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 horas
      };
    }
    
    throw new AccessDeniedError('Credenciales inválidas');
  }
  
  async logout(sessionId: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

const authService = new AuthService();
export default authService;