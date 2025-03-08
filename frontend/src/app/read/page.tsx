import { Card } from "@/components/Card";
import { Content } from '@/components/Content';
import { getBlogArticles } from "@/apis/blog/api";
import type { Metadata } from "next";

const description = "つちのこの私生活について書いたブログの一覧が見れるページです。"
export const metadata: Metadata = {
  title: "読む",
  description,
};

const Read = async () => {
  const blogs = await getBlogArticles();

  return (
    <Content title="書いたもの">
      {blogs.map((data) => (
        <Card
          key={data.id}
          id={data.id.toString()}
          title={data.title}
          description={data.content}
          createAt={data.created_at}
        />
      ))}
    </Content>
  );
}
export default Read;