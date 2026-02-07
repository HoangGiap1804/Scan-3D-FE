import { useQuery } from "@tanstack/react-query";
import userApi from "@/features/user/api/user.api";

// Khóa định danh cho query (cache key)
export const USER_KEYS = {
  all: ["users"] as const,
  profile: () => [...USER_KEYS.all, "profile"] as const,
};

export const useUserQuery = () => {
  return useQuery({
    queryKey: USER_KEYS.profile(),
    queryFn: userApi.getProfile,
    // Các tùy chọn khác nếu cần:
    // staleTime: 5 * 60 * 1000, // Cache trong 5 phút
    // retry: 1, // Thử lại 1 lần nếu lỗi
  });
};
