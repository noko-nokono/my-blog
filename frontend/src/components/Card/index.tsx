'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation'

type Props = {
  id: string;
  title: string;
  description: string;
  createAt: string;
};

const COUNT = 53;
export const Card = (props: Props) => {
  const {
    id,
    title,
    description,
    createAt,
  } = props;

  const router = useRouter();
  const sliceDescription = description.slice(0, COUNT);

  const date = new Date(createAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0始まりなので +1
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;

  const handlePageTransition = useCallback(() => {
    router.push(`/read/${id}`);
  }, [id, router]);

  return (
    <div className="w-72 h-48 flex flex-col justify-between p-4 bg-white border border-solid border-slate-200 rounded-md drop-shadow">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-4">{sliceDescription}...</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p>{formattedDate}</p>
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
