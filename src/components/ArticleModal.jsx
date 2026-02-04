import { useEffect } from "react";

export default function ArticleModal({ post, onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto p-6 relative border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-semibold"
          onClick={onClose}
        >
          ×
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 text-purple-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          {post.title}
        </h2>

        {/* Content */}
        <p className="text-gray-800 leading-relaxed mb-6">
          {post.body}
        </p>

        {/* Stats */}
        <div className="flex gap-6 text-sm text-gray-600">
          <span>👍 Likes: {post.reactions.likes}</span>
          <span>👎 Dislikes: {post.reactions.dislikes}</span>
          <span>👁 Views: {post.views}</span>
        </div>
      </div>
    </div>
  );
}
