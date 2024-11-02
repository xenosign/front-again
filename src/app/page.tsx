import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Hello, Tetz world!</h1>

        <Link
          href="/blog"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          블로그 보기
        </Link>

        <Image
          className="dark:invert mt-8"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>

      <footer className="row-start-3 text-sm text-gray-600">
        Powered by Next.js
      </footer>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'Hello Tetz - Home',
    description: 'Welcome to Tetz website',
  };
}
