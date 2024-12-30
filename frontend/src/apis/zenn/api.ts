import type { Zenn } from "@/types/zenn";

type ZennApi = {
  getZennArticles: () => Promise<Zenn>;
}

export const zennApi = (): ZennApi => {
  const getZennArticles = async () => {
    return await fetch('https://zenn.dev/api/articles?username=noko_noko&order=latest')
      .then((res) => res.json()) as Zenn
  };

  return {
    getZennArticles,
  };
};