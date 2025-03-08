import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  isPadding?: boolean;
}

export const Section = (props: Props) => {
  const {
    children,
    title,
    isPadding = false,
  } = props;

  const padding = isPadding ? 'px-8' : '';

  return (
    <section className='w-full'>
      <h2 className="text-center text-xl">{title}</h2>
      <div className={`flex flex-col gap-2 items-center mt-8 ${padding}`}>
        {children}
      </div>
    </section>
  )
};