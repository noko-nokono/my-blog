'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation'

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export const Card = (props: Props) => {
  const {
    id,
    title,
    description,
    date,
  } = props;

  const router = useRouter();

  const handlePageTransition = useCallback(() => {
    router.push(`/read/${id}`);
  }, []);

  return (
    <div className="w-72 h-48 flex flex-col justify-between p-4 bg-white border border-solid border-slate-200 rounded-md drop-shadow">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-4">{description}</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p>{date}</p>
        <button
          className="py-1 px-2 border bg-white border-solid border-slate-200 rounded-full"
          onClick={handlePageTransition}
        >
          詳しく見る
        </button>
      </div>
    </div>
  )
};
