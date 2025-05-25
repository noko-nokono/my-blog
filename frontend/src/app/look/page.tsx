import type { Metadata } from "next";
import { Content } from '@/components/Content';
import { Instax } from '@/components/Instax';

const description = "つちのこの撮った写真が見れるページです。"
export const metadata: Metadata = {
  title: "見る",
  description,
};

const photos = [
  { url: '/zimoto.jpeg', title: `猫とお別れした日` },
  { url: '/shibuya.jpeg', title: '早朝の渋谷' },
];

const Look = () => {
  return (
    <Content title="撮ったもの">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {photos.map((photo, index) => (
          <Instax
            key={index}
            url={photo.url}
            title={photo.title}
          />
        ))}
      </div>
    </Content>
  );
}

export default Look;