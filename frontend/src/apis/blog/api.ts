import type { Firebase, Blog } from "@/types/blog";
import { customFetch } from "@/apis/base";

type BlogApi = {
  getBlogArticles: () => Promise<Blog[]>;
}

export const blogApi = (): BlogApi => {
  const getBlogArticles = async () => {
    const res = customFetch('/api/blog', 'GET', {}).then((res) => res.json()) as Promise<Firebase<Blog[]>>;
    return res.then((data) => data.data);
  };

  return {
    getBlogArticles,
  }
};