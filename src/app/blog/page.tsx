import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Destination guides, planning tips, and visa know-how from Travel Anchor Tours & Travels.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">Blog</p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
        Notes before you go
      </h1>
      <p className="mt-2 max-w-xl text-sm text-ink-soft">
        Destination guides, budgeting notes, and the visa details that
        usually get missed until it's too late.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} delay={Math.min((i % 6) * 70, 350)} />
        ))}
      </div>
    </div>
  );
}
