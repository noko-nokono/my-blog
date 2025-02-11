import { Container } from '@/components/Container';
import { Section } from "@/components/Section";
import { Divider } from "@/components/Divider";
import type { Metadata } from "next";

const description = "つちのこの作成したゲームが見れるページです。"
export const metadata: Metadata = {
  title: "遊ぶ",
  description,
};

const Game = () => {
  return (
    <main>
      <Container>
        <h2 className="text-3xl">作ったもの</h2>
        <Divider />
        <Section title="ゲーム">
          <p>まだ未発表です。</p>
        </Section>
      </Container>
    </main>
  );
}

export default Game;