'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const GlobalNavigation = () => {
  const pathname = usePathname();

  const isAbout = pathname === "/about";
  const isRead = pathname === "/read";
  const isGame = pathname === "/game";
  const selectedStyle = "text-white bg-blue-200";

  return (
    <nav>
      <ul className="fixed left-2/4 bottom-20 -translate-x-1/2 w-80 flex justify-center items-center gap-10 px-4 py-2 bg-white border border-solid border-slate-200 rounded-full">
        <li className={`${isAbout && selectedStyle} ease-in duration-200 hover:text-white hover:bg-blue-200 rounded-md`}>
          <Link
            href="/about"
            className="px-2"
          >
            知る
          </Link>
        </li>
        <li className={`${isRead && selectedStyle} ease-in duration-200 hover:text-white hover:bg-blue-200 rounded-md`}>
          <Link
            href="/read"
            className="px-2"
          >
            読む
          </Link>
        </li>
        <li className={`${isGame && selectedStyle} ease-in duration-200 hover:text-white hover:bg-blue-200 rounded-md`}>
          <Link
            href="/game"
            className="px-2"
          >
            遊ぶ
          </Link>
        </li>
      </ul>
    </nav>
  )
};