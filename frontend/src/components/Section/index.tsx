import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
}

export const Section = (props: Props) => {
  const {
    children,
    title,
  } = props;

  return (
    <section className='w-full'>
      <h2 className="text-center text-xl">{title}</h2>
      <div className='flex flex-col gap-2 items-center mt-8 px-8'>
        {children}
      </div>
    </section>
  )
};