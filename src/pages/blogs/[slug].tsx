import { useRouter } from "next/router";
import MainLayout from "@/layouts/mainLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogDetail } from "@/types/BlogDetail";
import { CommetsBlog } from "@/types/CommentsBlog";
import { CommentBox } from "@/components/elements";
const BlogPostId = () => {
  const [data, setData] = useState<BlogDetail>();
  const [dataComments, setDataComments] = useState<CommetsBlog[]>([]);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const blogHendler = async () => {
      try {
        const { data } = await axios.get(`/api/blog-post/${slug}`);
        const response = await axios.get(`/api/blog-post/comments/${slug}`);
        setData(data);
        setDataComments(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    blogHendler();
  }, [slug]);
  return (
    <main className="overflow-hidden">
      <MainLayout>
        <section className="mt-36  mx-20 bg-sky-50 p-10 rounded-lg">
          <h1 className="text-4xl font-bold text-center ">{data?.title}</h1>
          <p className="text-xl text-center mt-4">{data?.body}</p>
        </section>
        <section className="mt-8 mx-20">
          <h2 className="text-3xl font-semibold border-b-2 w-52 border-slate-500">
            Comment
          </h2>
          <main className="flex flex-col items-end mt-9 gap-9">
          {dataComments.length !== 0 &&
            dataComments.map((item, idx) => (
                <CommentBox
                key={idx}
                body={item.body}
                email={item.email}
                name={item.name}
                />
                ))}
                </main>
        </section>
      </MainLayout>
    </main>
  );
};

export default BlogPostId;
