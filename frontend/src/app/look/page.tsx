import type { Metadata } from "next";
import { Container } from '@/components/Container';
import { Section } from "@/components/Section";
import { Divider } from "@/components/Divider";

const description = "つちのこの撮った写真が見れるページです。"
export const metadata: Metadata = {
  title: "見る",
  description,
};

const Look = () => {
  return (
    <main>
      <Container>
        <h2 className="text-3xl">撮ったもの</h2>
        <Divider />
        <Section title="写真">
          <p>まだありません。</p>
        </Section>
      </Container>
    </main>
  );
}

export default Look;