import axiosClient from '@/api/axiosClient';

export interface AuthRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
    id: string;
    email: string;
}

const authAPI = {
  register: (data: AuthRegister): Promise<AuthResponse> => {
    return axiosClient.post('/auth/register', data);
  },
};

export default authAPI;
