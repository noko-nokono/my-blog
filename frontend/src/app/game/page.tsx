import { Section } from "@/components/Section";
import { Divider } from "@/components/Divider";

const Game = () => {
  return (
    <main>
      <div className='w-full max-w-screen-sm mx-auto flex flex-col justify-center items-center'>
        <h2 className="text-3xl">作ったもの</h2>
        <Divider />
        <Section title="ゲーム">
          <p>まだ未発表です。</p>
        </Section>
      </div>
    </main>
  );
}

export default Game;