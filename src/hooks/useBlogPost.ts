import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../apis/blog";
import { ApiResponse } from "../types/api";
import { BlogPostType } from "../types/blog";

// React Query로 블로그 포스트 가져오기
export const useGetBlogPosts = () => {
  return useQuery<ApiResponse<BlogPostType[]>>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      const response = await getBlogPosts();
      if (!response.success) {
        throw new Error(response.message);
      }
      return response;
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
    retry: 2, // 실패 시 2번 재시도
  });
};
