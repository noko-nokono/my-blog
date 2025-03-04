import type { Firebase, Blog } from "@/types/blog";
import { customFetch } from "@/apis/base";

type BlogApi = {
  getBlogArticles: () => Promise<Blog[]>;
}

export const blogApi = (): BlogApi => {
  const getBlogArticles = async () => {
    const res = customFetch('/api/blog', 'GET', { cache: 3600 })
      .then((res) => res.json()) as Promise<Firebase<Blog[]>>;
    return res.then((data) => data.data);
  };

  return {
    getBlogArticles,
  }
};

export const blogIdApi = (id: string) => {
  const getBlogIdArticle = async () => {
    const res = customFetch(`/api/blog/${id}`, 'GET', {})
      .then((res) => res.json()) as Promise<Firebase<Blog>>;
    return res.then((data) => data.data);
  }

  return {
    getBlogIdArticle,
  }
}