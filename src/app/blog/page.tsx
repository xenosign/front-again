import BlogPosts from '../components/BlogPosts';
import Link from 'next/link';

async function getPosts() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=3',
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">블로그</h1>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            현재 서버 시간: {new Date().toLocaleString('ko-KR')}
          </p>
        </div>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          홈으로
        </Link>
        <BlogPosts posts={posts} />
      </main>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'Tetz Blog',
    description: 'Server-side rendered blog page',
  };
}
