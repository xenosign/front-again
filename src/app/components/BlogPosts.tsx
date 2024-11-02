import { Post } from './types';

export default function BlogPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-6">최근 게시물</h2>
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
  );
}
