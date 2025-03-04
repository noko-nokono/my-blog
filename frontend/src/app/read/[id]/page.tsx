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
  const content = blogDetail.content.replaceAll(" ", "\n");
  console.log('content', content);

  return (
    <main>
      <Container>
        <h1 className="text-2xl">{ blogDetail.title }</h1>
        <p className="whitespace-pre-line mt-8">{ content }</p>
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