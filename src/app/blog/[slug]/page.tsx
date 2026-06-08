import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowRight, LuCalendar, LuUser } from "react-icons/lu";
import BlogPostCard, { BlogContent } from "@/components/blog/blog-post-card";
import JsonLd from "@/components/seo/json-ld";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostDescription,
} from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getArticleSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/structured-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: getBlogPostDescription(post),
    path: `/blog/${post.id}`,
    image: post.image,
    keywords: [post.title, post.imageAlt],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const description = getBlogPostDescription(post);
  const relatedPosts = getAllBlogPosts()
    .filter((item) => item.id !== post.id)
    .slice(0, 2);

  return (
    <main className="pt-20" dir="rtl">
      <JsonLd
        data={[
          getArticleSchema({
            title: post.title,
            description,
            path: `/blog/${post.id}`,
            image: post.image,
            datePublished: post.date,
            author: post.author,
          }),
          getBreadcrumbSchema([
            { name: "الرئيسية", path: "/" },
            { name: "المدونة", path: "/blog" },
            { name: post.title, path: `/blog/${post.id}` },
          ]),
        ]}
      />

      <article className="bg-white py-10 sm:py-14">
        <div className="container">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff7a12] transition hover:text-[#ea580c]"
          >
            <LuArrowRight aria-hidden="true" size={16} />
            العودة إلى المدونة
          </Link>

          <div className="mx-auto max-w-4xl">
            <div className="relative mb-8 aspect-16/9 overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#9ca3af]">
              <span className="inline-flex items-center gap-1.5">
                <LuCalendar aria-hidden="true" size={14} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <LuUser aria-hidden="true" size={14} />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-[#ff7a12] sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-8">
              <BlogContent blocks={post.content} />
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-[#faf7f5] py-12 sm:py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-2xl font-extrabold text-[#2f2f2f]">
              مقالات ذات صلة
            </h2>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <BlogPostCard key={relatedPost.id} post={relatedPost} linked />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
