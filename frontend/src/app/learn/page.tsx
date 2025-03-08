import { Content } from '@/components/Content';
import { Section } from "@/components/Section";
import { Divider } from "@/components/Divider";
import { List } from "@/components/List";
import { getZennArticles } from "@/apis/zenn/api";
import type { Metadata } from "next";

const description = "つちのこの執筆した記事や登壇資料が見れるページです。"
export const metadata: Metadata = {
  title: "学ぶ",
  description,
};

const Learn = async () => {
  const zenn = await getZennArticles();
  console.log(zenn);

  return (
    <Content title='学んだもの'>
      <Section title="技術記事">
        <ul className='flex flex-wrap justify-center gap-4'>
          {zenn.articles.map((article) => (
            <List
              key={article.id}
              title={article.title}
              date={article.published_at}
              path={`https://zenn.dev/${article.path}`}
              likeCount={article.liked_count}
              emoji={article.emoji}
            />
          ))}
        </ul>
      </Section>
      <Divider />
      <Section title="登壇資料" isPadding>
        <iframe
          src="https://speakerdeck.com/player/384feb1071f345c99c9b34cf5d777a47"
          title="TypeScriptでライブラリとの依存を限定的にする方法"
          className="w-full aspect-video"
          data-ratio="1.7777777777777777"
        ></iframe>
      </Section>
    </Content>
  );
}

export default Learn;