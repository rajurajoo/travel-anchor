import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BlogPost } from "@/lib/types";
import { formatPostDate } from "@/lib/blog";

export default function BlogCard({
  post,
  delay = 0,
}: {
  post: BlogPost;
  delay?: number;
}) {
  const [from, to] = post.coverGradient;
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-0.5"
      >
        <div
          className="relative h-32 overflow-hidden"
          style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <Image
            src={`/images/blog/${post.slug}.jpg`}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {post.category}
          </p>
          <h3 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="line-clamp-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
          <p className="mt-1 text-xs text-ink-faint">
            {formatPostDate(post.date)} · {post.readMinutes} min read
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
