import type { Metadata } from "next";
import Blog from "@/components/blog/blog";

export const metadata: Metadata = {
  title: "المدونة | الأنصار",
  description:
    "نصائح وإرشادات متخصصة في شراء وبيع الاثاث والمعدات المستعملة في الرياض.",
};

export default function BlogPage() {
  return (
    <main>
      <Blog />
    </main>
  );
}
