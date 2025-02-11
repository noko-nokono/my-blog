import React from "react";
import { Container } from "@/components/Container";
import { blogIdApi } from "@/apis/blog/api";

type Params = {
  params: Promise<{ id: string }>;
}

const ReadId = async ({params}: Params) => {
  const id = (await params).id;

  const { getBlogIdArticle } = blogIdApi(id);
  const blogDetail = await getBlogIdArticle();

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