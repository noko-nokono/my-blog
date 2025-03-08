import { Content } from '@/components/Content';
import { Section } from "@/components/Section";
import { WideCard } from "@/components/WideCard";
import { MediaCard } from "@/components/MediaCard";
import type { Metadata } from "next";

const description = "つちのこの作成したゲームが見れるページです。"
export const metadata: Metadata = {
  title: "遊ぶ",
  description,
};

const games = [
  { url: '/game.png', title: '作成中', description: 'まだ未公開です。。。' },
];

const Game = () => {
  return (
    <Content title='作ったもの'>
      <Section title="ゲーム" isPadding>
        {games.map((game) => (
          <>
            <WideCard
              className='hidden sm:flex'
              key={`${game.title}_pc`}
              url={game.url}
              title={game.title}
              description={game.description}
              links={[]}
            />
            <MediaCard
              className='block sm:hidden'
              key={`${game.title}_sp`}
              url={game.url}
              title={game.title}
              description={game.description}
              links={[]}
            />
          </>
        ))}
      </Section>
    </Content>
  );
}

export default Game;