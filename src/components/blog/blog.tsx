import Image from "next/image";
import BlogPostCard from "@/components/blog/blog-post-card";
import { blogPosts, blogPostsSection3 } from "@/data/blog-posts";

export default function Blog() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[280px] items-center overflow-hidden pt-24 text-white sm:min-h-[320px]"
        dir="rtl"
      >
        <Image
          src="/imgs/hero.jpg"
          alt="المدونة - نصائح وإرشادات لشراء وبيع الاثاث والمعدات المستعملة"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#f97316]/65" />

        <div className="container py-12 text-center sm:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              المدونة
            </h1>

            <p className="mt-4 max-w-3xl text-base font-bold leading-8 sm:text-xl sm:leading-9">
              نصائح وإرشادات متخصصة في شراء وبيع الاثاث والمعدات المستعملة
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16" dir="rtl">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} linked />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 sm:pb-16" dir="rtl">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
            {blogPostsSection3.map((post) => (
              <BlogPostCard key={post.id} post={post} linked />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
