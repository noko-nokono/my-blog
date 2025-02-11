import "./globals.css";
import { GlobalNavigation } from "@/components/GlobalNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // https://github.com/vercel/next.js/discussions/72537#discussioncomment-11722697
    <html lang="en" className="hydrated">
      <body
        cz-shortcut-listen="true"
        className="font-zenmaru relative text-zinc-500 min-h-svh mx-auto pt-20 pb-40 scroll-px-10"
      >
        {children}
        <GlobalNavigation />
      </body>
    </html>
  );
}
