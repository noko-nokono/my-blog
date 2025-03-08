import { Content } from '@/components/Content';
import { Section } from "@/components/Section";
import type { Metadata } from "next";

const description = "つちのこの作成したゲームが見れるページです。"
export const metadata: Metadata = {
  title: "遊ぶ",
  description,
};

const Game = () => {
  return (
    <Content title='作ったもの'>
      <Section title="ゲーム">
          <p>まだ未発表です。</p>
      </Section>
    </Content>
  );
}

export default Game;