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
        <div className='flex flex-wrap justify-center gap-4'>
          <iframe
            src="https://speakerdeck.com/player/dca75ae470cf46d2be304b621648c5ba"
            title="Reactの歴史を振り返る"
            className="w-96 aspect-video"
            data-ratio="1.7777777777777777"
            ></iframe>
          <iframe
            src="https://speakerdeck.com/player/2b63821ae8a34e418ffbdfd58cc8679a"
            title="フロントエンドエンジニアもGPTの裏側を理解したい"
            className="w-96 aspect-video"
            data-ratio="1.7777777777777777"
          ></iframe>
          <iframe
            src="https://speakerdeck.com/player/bf7e8a46dd8043a3bfd30326a4f14724"
            title="React version 19 追加機能をまとめる"
            className="w-96 aspect-video"
            data-ratio="1.7777777777777777"
          ></iframe>
          <iframe
            src="https://speakerdeck.com/player/384feb1071f345c99c9b34cf5d777a47"
            title="TypeScriptでライブラリとの依存を限定的にする方法"
            className="w-96 aspect-video"
            data-ratio="1.7777777777777777"
          ></iframe>
        </div>
      </Section>
    </Content>
  );
}

export default Learn;