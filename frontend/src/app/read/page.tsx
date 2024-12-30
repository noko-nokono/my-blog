import { Card } from "@/components/Card";
import { blogApi } from "@/apis/blog/api";

const MOCK_DATA = [
  { id: 1, title: "タイトル", description: "こんにちわん！お久しぶりですねー。昨日はこんなことがあったよん。みんなはどうだったかな？", date: "2024/12/15" },
  { id: 2, title: "Hello World", description: "なんでもいい、それが難しい", date: "2024/12/15" },
  { id: 3, title: "こんにちわん", description: "今日誕生日の人もいるんだね。おめでとう。", date: "2024/12/15" },
  { id: 4, title: "仮のタイトルを付けてます", description: "今日の夕飯は何かな？お味噌汁あるかな？", date: "2024/12/15" },
  { id: 5, title: "なんでもいいことを書くのが難しい", description: "ちょっと長めの文章もあると嬉しい。だけど、長い文章を書こうとすると、途端に頭が回らない", date: "2024/12/15" },
  { id: 6, title: "6つくらいあればいいかな", description: "コーヒーの無糖はやはりカッコいい。だけど、私は甘いのを好む。", date: "2024/12/15" },
  { id: 7, title: "こんにちわん", description: "今日誕生日の人もいるんだね。おめでとう。", date: "2024/12/15" },
  { id: 8, title: "仮のタイトルを付けてます", description: "今日の夕飯は何かな？お味噌汁あるかな？", date: "2024/12/15" },
];

const Read = async () => {
  const { getBlogArticles } = blogApi();
  const blogs = await getBlogArticles();
  console.log('blogs', blogs);

  return (
    <main>
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl">書いたもの</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {MOCK_DATA.map((data) => (
            <Card
              key={data.id}
              id={data.id.toString()}
              title={data.title}
              description={data.description}
              date={data.date}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
export default Read;