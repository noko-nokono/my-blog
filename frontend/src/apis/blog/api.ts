import type { Firebase, Blog } from "@/types/blog";
import { customFetch } from "@/apis/base";

export const getBlogArticles = async () => {
  const res = customFetch('/api/blog', 'GET', { cache: 3600 })
    .then((res) => res.json()) as Promise<Firebase<Blog[]>>;
  return res.then((data) => data.data);
};

export const getBlogIdArticle = async (id: string) => {
  const res = customFetch(`/api/blog/${id}`, 'GET', { cache: 'force-cache' })
    .then((res) => res.json()) as Promise<Firebase<Blog>>;
  return res.then((data) => data.data);
}