import type { Blog } from "@/types/blog";
import { customFetch } from "@/apis/base";

type BlogApi = {
  getBlogArticles: () => Promise<Blog[]>;
}

export const blogApi = (): BlogApi => {
  const getBlogArticles = async () => {
    return customFetch('/api/blog', 'GET', {}).then((res) => res.json()) as Promise<Blog[]>;
  };

  return {
    getBlogArticles,
  }
};