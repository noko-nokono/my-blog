type Article = {
  emoji: string,
  id: number,
  liked_count: number,
  path: string,
  published_at: string,
  title: string,
}

export type Zenn = {
  articles: Article[],
  next_page: number | null,
}
