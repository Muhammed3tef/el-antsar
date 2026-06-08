import Image from "next/image";
import Link from "next/link";
import { LuCalendar, LuUser, LuX } from "react-icons/lu";
import type { BlogContentBlock, BlogPost } from "@/data/blog-posts";

export function BlogContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="space-y-4 text-sm leading-7 text-[#4a403b]">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="font-medium">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h3
                key={index}
                className="pt-1 text-base font-extrabold text-[#ff7a12]"
              >
                {block.text}
              </h3>
            );
          case "ordered-list":
            return (
              <ol
                key={index}
                className="list-decimal space-y-2 pr-5 marker:font-bold marker:text-[#ff7a12]"
              >
                {block.items.map((item) => (
                  <li key={item} className="font-medium">
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "unordered-list":
            return (
              <ul
                key={index}
                className="list-disc space-y-2 pr-5 marker:text-[#ff7a12]"
              >
                {block.items.map((item) => (
                  <li key={item} className="font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "cross-list":
            return (
              <ul key={index} className="space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-medium"
                  >
                    <LuX
                      aria-hidden="true"
                      size={16}
                      className="mt-1 shrink-0 text-[#ef4444]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "mistake-list":
            return (
              <ol key={index} className="space-y-4">
                {block.items.map((item) => (
                  <li key={item.title} className="font-medium">
                    <span className="font-extrabold text-[#2f2f2f]">
                      {item.title}
                    </span>
                    <p className="mt-1">{item.text}</p>
                  </li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

type BlogPostCardProps = {
  post: BlogPost;
  linked?: boolean;
};

export default function BlogPostCard({ post, linked = false }: BlogPostCardProps) {
  const title = (
    <h2 className="text-xl font-extrabold leading-snug text-[#ff7a12] sm:text-2xl">
      {post.title}
    </h2>
  );

  return (
    <article className="overflow-hidden rounded-2xl bg-white">
      {linked ? (
        <Link href={`/blog/${post.id}`} className="block">
          <div className="relative aspect-16/10 overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </Link>
      ) : (
        <div className="relative aspect-16/10 overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="space-y-4 px-5 py-6 sm:px-6 sm:py-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#9ca3af]">
          <span className="inline-flex items-center gap-1.5">
            <LuCalendar aria-hidden="true" size={14} />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LuUser aria-hidden="true" size={14} />
            {post.author}
          </span>
        </div>

        {linked ? (
          <Link
            href={`/blog/${post.id}`}
            className="block transition hover:text-[#ea580c]"
          >
            {title}
          </Link>
        ) : (
          title
        )}

        <BlogContent blocks={post.content} />
      </div>
    </article>
  );
}
