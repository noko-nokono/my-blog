import Image from 'next/image';
import { Divider } from '@/components/Divider';

const About = () => {
  return (
    <main>
      <div className='w-full max-w-screen-sm mx-auto flex flex-col justify-center items-center'>
        <p>
          <Image
            src="/profile.png"
            alt=''
            width={240}
            height={240}
            className='rounded-2xl'
          />
        </p>
        <div className='flex flex-col gap-4 mt-6 text-center'>
          <h1 className='text-3xl font-bold'>つちのこ</h1>
          <p className='font-bold'>Frontend Developer / Game Creater / Pixel Art Creator</p>
        </div>
        <Divider />
        <section>
          <h2 className="text-center text-xl">自己紹介</h2>
          <p className="mt-8">つちのこという名前で活動している者です。</p>
        </section>
        <Divider />
        <section>
          <h2 className="text-center text-xl">好きなこと</h2>
          <div className='flex flex-col gap-2 items-center mt-8 px-8'>
            <p>好きなことは広く浅く、たくさんあると思います。</p>
            <p className='text-center my-4'>1. 読書（小説）</p>
            <p>大人になってから割と読むようになりました。</p>
            <p>なので、読んでいる冊数だとそこまで多くないですが、最近だと月に2,3冊くらいのペースで読んでいる感じです。</p>
            <p>青山美智子さんや瀬尾まいこさんなど、日常生活がベースになっている作品をよく読んでいて、登場人物の感情がポジティブな方に揺れるところが好きです。</p>
            <p className='text-center my-4'>2. お笑い芸人</p>
            <p>みんな見ている有名なバラエティ番組は毎週楽しく見ています。</p>
            <p>好きになったキッカケは、霜降り明星さんで、今もバラエティやYouTube、ラジオなど色々見て笑っています。</p>
            <p>M-1グランプリは毎年の楽しみで、クリスマスやお正月よりも楽しみな日です。</p>
            <p className='text-center my-4'>3. APEX LEGENDS</p>
            <p>初めてのFPSゲームで、シーズン8くらいからやっています。</p>
            <p>自分でするのも好きですが、競技のAPEXが特に好きで、日韓の予選から世界大会はもちろん、毎日スクリム配信まで視聴しています。</p>
            <p>自分でプレイする時は、バンガロールかコンジットを使うことが多くて、ショットガンが苦手です。</p>
          </div>
        </section>
        <Divider />
        <section>
          <h2 className="text-center text-xl">できること</h2>
          <div className='flex flex-col gap-2 items-center mt-8 px-8'>
            <p>主にエンジニアとしての技術的なところで書こうかなと思います。</p>
            <p className='text-center my-4'>1. できる</p>
            <p>HTML, CSS, JavaScript, React, TypeScript, Next.js</p>
            <p></p>
            <p className='text-center my-4'>2. ちょっとできる</p>
            <p></p>
            <p className='text-center my-4'>3. ほんの少しできる</p>
          </div>
        </section>
        <Divider />
        <section>
          <h2 className="text-center text-xl">連絡</h2>
          <div className='flex flex-col gap-2 items-center mt-8 px-8'>
            <div className='flex gap-10 justify-center text-gray-400 font-bold'>
              <a href="mailto:tutinoko.nokonoko619@gmail.com">Emailaa</a>
              <a href="https://x.com/noko_noko619">X</a>
              <a href="">YouTube</a>
            </div>
            <p className='my-4'>メール返信などはできないことが多いです。</p>
            <p>SNSも得意ではなく、あまりポストしたりできないです。</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;