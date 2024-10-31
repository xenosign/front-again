import Image from 'next/image';

// 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
};

// SSR 데이터 Fetching
async function getPosts() {
  // JSONPlaceholder API를 사용한 예제
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=3',
    {
      cache: 'no-store', // SSR을 위해 캐시 비활성화
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Hello, Tetz world!</h1>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            현재 서버 시간: {new Date().toLocaleString('ko-KR')}
          </p>
        </div>

        {/* 가져온 데이터 표시 */}
        <div className="w-full space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-6">
            최근 게시물
          </h2>
          {posts.map((post: Post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>

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

// 에러 처리
export function generateMetadata() {
  return {
    title: 'Hello Tetz - Posts',
    description: 'Server-side rendered posts page',
  };
}
