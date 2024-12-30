'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const GlobalNavigation = () => {
  const pathname = usePathname();

  const list = [
    { title: "知る", link: "/about", isSelected: pathname === "/about" },
    { title: "読む", link: "/read", isSelected: pathname === "/read" },
    { title: "学び", link: "/learn", isSelected: pathname === "/learn" },
    { title: "遊ぶ", link: "/game", isSelected: pathname === "/game" },
  ];
  const selectedStyle = "text-white bg-blue-200";

  return (
    <nav>
      <ul className="fixed left-2/4 bottom-20 -translate-x-1/2 w-80 flex justify-center items-center gap-6 px-4 py-2 bg-white border border-solid border-slate-200 rounded-full">
        {list.map((item) => (
          <li
            key={item.title}
            className={`${item.isSelected && selectedStyle} ease-in duration-200 hover:text-white hover:bg-blue-200 rounded-md`}
          >
            <Link
              href={item.link}
              className="px-2"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};