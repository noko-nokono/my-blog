import { Divider } from "@/components/Divider";

type Props = {
  children: React.ReactNode;
  title: string;
}

export const Content = (props: Props) => {
  const {
    children,
    title,
  } = props;

  return (
    <main>
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl">{ title }</h2>
        <Divider />
        <div className="flex flex-wrap justify-center gap-4">
          { children }
        </div>
      </div>
    </main>
  )
};
