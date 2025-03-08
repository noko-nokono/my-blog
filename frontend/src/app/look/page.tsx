import type { Metadata } from "next";
import { Content } from '@/components/Content';

const description = "つちのこの撮った写真が見れるページです。"
export const metadata: Metadata = {
  title: "見る",
  description,
};

const Look = () => {
  return (
    <Content title="撮ったもの">
      <div className="px-8">
        <p>まだありません。</p>
      </div>
    </Content>
  );
}

export default Look;