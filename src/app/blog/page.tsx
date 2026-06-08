import Blog from "@/components/blog/blog";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "المدونة",
  description:
    "نصائح وإرشادات متخصصة في شراء وبيع الاثاث والمعدات المستعملة في الرياض.",
  path: "/blog",
  keywords: ["مدونة اثاث مستعمل", "نصائح بيع اثاث الرياض"],
});

export default function BlogPage() {
  return (
    <main>
      <Blog />
    </main>
  );
}
