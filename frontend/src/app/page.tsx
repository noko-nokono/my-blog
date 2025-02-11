import type { Metadata } from "next";

const description = "つちのこという名前でネットで活動している者のポートフォリオサイトになります。"
export const metadata: Metadata = {
  title: "トップページ",
  description,
};

const Home = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <main>
        <p>まだ準備中です...</p>
      </main>
    </div>
  );
}

export default Home;