import { Container } from '@/components/Container';
import { Section } from "@/components/Section";
import { Divider } from "@/components/Divider";
import { List } from "@/components/List";
import { zennApi } from "@/apis/zenn/api";
import type { Metadata } from "next";

const description = "つちのこの執筆した記事や登壇資料が見れるページです。"
export const metadata: Metadata = {
  title: "学ぶ",
  description,
};

const Learn = async () => {
  const { getZennArticles } = zennApi();
  const zenn = await getZennArticles();

  return (
    <main>
      <Container>
        <h2 className="text-3xl">学んだもの</h2>
        <Divider />
        <Section title="技術記事">
          <ul>
            {zenn.articles.map((article) => (
              <List
                key={article.id}
                title={article.title}
                date={article.published_at}
                path={`https://zenn.dev/${article.path}`}
              />
            ))}
          </ul>
        </Section>
        <Divider />
        <Section title="登壇資料">
          <iframe
            src="https://speakerdeck.com/player/384feb1071f345c99c9b34cf5d777a47"
            title="TypeScriptでライブラリとの依存を限定的にする方法"
            className="w-full aspect-video"
            data-ratio="1.7777777777777777"
          ></iframe>
        </Section>
      </Container>
    </main>
  );
}

export default Learn;