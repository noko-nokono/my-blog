import { Card } from "@/components/Card";
import { blogApi } from "@/apis/blog/api";
import type { Metadata } from "next";

const description = "つちのこの私生活について書いたブログの一覧が見れるページです。"
export const metadata: Metadata = {
  title: "読む",
  description,
};

const Read = async () => {
  const { getBlogArticles } = blogApi();
  const blogs = await getBlogArticles();

  return (
    <main>
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl">書いたもの</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {blogs.map((data) => (
             <Card
              key={data.id}
              id={data.id.toString()}
              title={data.title}
              description={data.content}
              createAt={data.created_at}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
export default Read;