import axiosClient from '@/api/axiosClient';

// 1. Define Types
export interface UserProfile {
  id: string;
  user_name: string;
  email: string;
  fullName: string;
  avatar?: string;
  role: string;
}

// 2. Define Endpoints
const userApi = {
  // Lấy User Profile
  getProfile: (): Promise<UserProfile> => {
    return axiosClient.get('/users/0201f414-5925-4af3-ab2d-3a9664c3d2bc');
  },

  // Update User Profile
  updateProfile: (data: Partial<UserProfile>): Promise<UserProfile> => {
    return axiosClient.put('/users/profile', data);
  },
};

export default userApi;
