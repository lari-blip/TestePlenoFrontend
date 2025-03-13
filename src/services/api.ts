import axios from "axios";

// Cria a instância do Axios com a baseURL para o Mockoon
const api = axios.create({
  baseURL: "http://localhost:3001/login", // URL do Mockoon
});

// Definição da interface da resposta de login, contendo o token
interface LoginResponse {
  token: string;
}

// Função para realizar o login
export const login = async (email: string, password: string): Promise<LoginResponse | null> => {
  try {
    // Faz a requisição POST para o endpoint /login
    const response = await api.post<LoginResponse>("/login", { email, password });

    // Armazena o token no localStorage
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }

    // Retorna os dados da resposta
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null; // Retorna null em caso de erro
  }
};

// Função para obter o token armazenado no localStorage
export const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken");
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = (): boolean => {
  const token = getAuthToken();
  return token !== null;
};

// Função para realizar logout, removendo o token do localStorage
export const logout = (): void => {
  localStorage.removeItem("authToken");
};
