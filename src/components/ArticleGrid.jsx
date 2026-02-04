import { useEffect, useState } from "react";
import axios from "axios";
import ArticleModal from './ArticleModal';

export default function ArticleGrid() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Collect all unique tags
  const tags = ["All", ...new Set(posts.flatMap(p => p.tags))];

  const filtered = posts.filter(p =>
    (tag === "All" || p.tags.includes(tag)) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium">
        Loading articles...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Latest Articles ✨
      </h2>

      {/* Search + Filter */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">

        {/* Search */}
        <input
          className="flex-1 px-4 py-3 rounded-xl bg-white/70 backdrop-blur border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="Search posts..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                tag === t
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white border border-gray-300 hover:bg-indigo-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filtered.map(post => (
          <article
            key={post.id}
            onClick={() => setSelected(post)}
            className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            {/* Gradient Image */}
            <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mb-4" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map(tag => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-bold text-gray-900">
              {post.title}
            </h3>

            {/* Body */}
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {post.body}
            </p>

            {/* Meta */}
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>👍 {post.reactions.likes}</span>
              <span>👁 {post.views}</span>
            </div>

            <div className="mt-2 text-indigo-600 font-medium hover:underline">
              Read Article →
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ArticleModal post={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
