import type { Metadata } from "next";
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Divider } from '@/components/Divider';
import { Label } from '@/components/Label';

const description = "つちのこという名前でネットで活動している者のポートフォリオサイトになります。"
export const metadata: Metadata = {
  title: "トップページ",
  description,
};

const canDoList = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Recoil', 'Jotai', 'Chakra', 'Yamada', 'SCSS', 'Tanstack Query', 'Jest', 'React Testing Library', 'Zod'];
const somewhatCanDoList = ['React Router', 'Redux', 'MobX', 'Mantine', 'MUI', 'Styled Component', 'Tailwind', 'SWR', 'Storybook', 'Mock Service Worker', 'React Hook Form', 'reCAPTCHA'];
const otherList = ['Go', 'Node.js', 'gRPC', 'GCP', 'Git', 'GitHub', 'GitHub Actions', 'Firebase', 'Docker', 'Vercel', 'VSCode', 'Slack', 'Notion'];

const Home = () => {
  return (
    <main>
      <Container>
        <section className='flex flex-col items-center gap-4 px-8'>
          <p>
            <Image
              src="/profile.png"
              alt=''
              width={240}
              height={240}
              className='rounded-2xl'
            />
          </p>
          <h1 className='text-3xl font-bold'>つちのこ</h1>
          <p className='font-bold'>Frontend Developer / Game Creater</p>
        </section>
        <Divider />
        <Section title='自己紹介' isPadding>
          <p>つちのこという名前で活動しております。</p>
          <p className='text-center my-5'>仕事</p>
          <p>Webサービスの開発でフロントエンド領域を担当しているエンジニアです。</p>
          <p>バックエンドやインフラの開発も業務で経験があり、最低限の開発なら問題なく実装することができます。</p>
          <p>最近は、記事の執筆や技術カンファレンスの登壇、OSSのコントリビュートなどもさせていただいており、開発に関することを幅広くやっております。</p>
          <p>ゲーム開発やピクセルアートは趣味でやっているため、そこまで複雑なことはできません。</p>
          <p>技術的なことは「できること」で詳しく紹介させていただきます。</p>
          <p className='text-center my-5'>経歴</p>
          <p>大学では、日本史についての研究を行なっておりました。</p>
          <p>大学1年生からWebサイトの制作会社でアルバイトを行なっており、大学3年生までたくさん学ばせていただきました。</p>
          <p>大学4年の夏から現在所属している会社の内定者として半年間アルバイトさせていただき、エンジニアとしてのキャリをスタートさせました。</p>
          <p>会社に入社してからは、ゲーム配信サービスや新規のエンタメサービスの開発などを2年半ほどさせていただきました。</p>
          <p>現在は、広告系のサービスの開発を行なっており、日々忙しく働いております。</p>
          <p className='text-center my-5'>目標</p>
          <p>現在作成しているゲームをリリースしたいです。</p>
          <p>ここまでに作り切るという期限が迫っており、日々頭を悩ましています。</p>
          <p>期限に間に合うかは別として「遊ぶ」ページにゲームが載っていれば達成です。</p>
          <p>あなたがこれを見ている頃には達成できているのでしょうか、、、</p>
        </Section>
        <Divider />
        <Section title='できること' isPadding>
          <p>主にフロントエンジニアの技術的なところで書こうかなと思います。</p>
          <p className='text-center my-5'>1. できる</p>
          <ul className='flex gap-2 flex-wrap justify-center'>
            { canDoList.map((item) => (
              <Label key={item} title={item} />
            ))}
          </ul>
          <p className='text-center my-5'>2. ちょっとできる</p>
          <ul className='flex gap-2 flex-wrap justify-center'>
            { somewhatCanDoList.map((item) => (
              <Label key={item} title={item} />
            ))}
          </ul>
          <p className='text-center my-5'>3. その他</p>
          <ul className='flex gap-2 flex-wrap justify-center'>
            { otherList.map((item) => (
              <Label key={item} title={item} />
            ))}
          </ul>
        </Section>
        <Divider />
        <Section title='連絡' isPadding>
          <div className='flex gap-10 justify-center text-gray-400 font-bold'>
            <a className='w-16 text-center' href="mailto:tutinoko.nokonoko619@gmail.com">Email</a>
            <a className='w-16 text-center' href="https://x.com/noko_noko619">X</a>
          </div>
          <p className='my-4'>メール返信などはできないことが多いです。</p>
          <p>SNSも得意ではなく、あまりポストしたりできないです。</p>
        </Section>
      </Container>
    </main>
  );
}

export default Home;