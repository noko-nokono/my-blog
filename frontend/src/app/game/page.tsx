import { Container } from '@/components/Container';
import { Section } from "@/components/Section";
import { Divider } from "@/components/Divider";

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