import React from "react";
import { Container } from "@/components/Container";
import { getBlogArticles, getBlogIdArticle } from "@/apis/blog/api";
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>;
}

const ReadId = async ({params}: Props) => {
  const id = (await params).id;

  const blogDetail = await getBlogIdArticle(id);

  // スペースが二つ続いた場合に改行を行う処理
  const lineBreak = blogDetail.content.replaceAll(" ", "\n");
  // 各行をpタグとして表示する処理
  // 特別な表示を行いたい場合は、if条件で切り替えを行う
  const content = lineBreak.split(/\n\s*\n/).map((paragraph, index) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    if (urlRegex.test(paragraph)) {
      return (
        <a
          key={index}
          href={paragraph}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline block mb-8"
        >
          {paragraph}
        </a>
      )
    }

    return (
      <p key={index} className="mb-8">{paragraph}</p>
    )
  });

  return (
    <main>
      <Container>
        <h1 className="text-2xl">{ blogDetail.title }</h1>
        <div className="mt-8">
          {...content}
        </div>
      </Container>
    </main>
  )
};

export default ReadId;

export async function generateStaticParams() {
  const blogs = await getBlogArticles();
  return blogs.map((blog) => ({ params: { id: blog.id } }));
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = (await params).id
  const blogDetail = await getBlogIdArticle(id);
 
  return {
    title: blogDetail.title,
    description: blogDetail.content,
  }
}