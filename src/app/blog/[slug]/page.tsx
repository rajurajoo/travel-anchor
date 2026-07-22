import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const [from, to] = post.coverGradient;
  const more = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div>
      <div
        className="relative h-56 w-full overflow-hidden sm:h-72"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <Image
          src={`/images/blog/${post.slug}.jpg`}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>
      <div className="mx-auto max-w-2xl px-6 py-12">
        <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
          ← All posts
        </Link>
        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent">
          {post.category}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold text-ink md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-xs text-ink-faint">
          {formatPostDate(post.date)} · {post.readMinutes} min read
        </p>

        <div className="mt-8 space-y-5">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={Math.min(i * 60, 240)}>
              <p className="text-base leading-relaxed text-ink-soft">{para}</p>
            </Reveal>
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-14 border-t border-line pt-10">
            <h2 className="font-display text-xl font-semibold text-ink">
              More from the blog
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {more.map((p, i) => (
                <BlogCard key={p.slug} post={p} delay={i * 90} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
