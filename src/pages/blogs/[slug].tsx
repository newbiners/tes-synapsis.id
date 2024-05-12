import { useRouter } from "next/router";
import MainLayout from "@/layouts/mainLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogDetail } from "@/types/BlogDetail";
import { CommetsBlog } from "@/types/CommentsBlog";
import { CommentBox } from "@/components/elements";
import { useAtom } from "jotai";
import { loaderAtom } from "@/stores";
const BlogPostId = () => {
  const [data, setData] = useState<BlogDetail>();
  const [dataComments, setDataComments] = useState<CommetsBlog[]>([]);
  const [_isLoader, setIsLoader] = useAtom<Boolean>(loaderAtom);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const blogHendler = async () => {
      try {
        setIsLoader(true);
        const { data } = await axios.get(`/api/blog-post/${slug}`);
        const response = await axios.get(`/api/blog-post/comments/${slug}`);
        setData(data);
        setDataComments(response.data);
      } catch (e) {
        console.log(e);
      }finally{
        setIsLoader(false)
      }
    };
    blogHendler();
  }, [slug]);
  return (
    <main className="overflow-hidden">
      <MainLayout>
        <section className="mt-36  mx-3 xl:mx-20 bg-sky-50 p-10 rounded-lg">
          <h1 className="text-2xl sm:text-3xl  xl:text-4xl font-bold text-center ">{data?.title}</h1>
          <p className="text-base sm:text-lg xl:text-xl text-center mt-4">{data?.body}</p>
        </section>
        <section className="mt-8 mx-3 xl:mx-20">
          <h2 className="text-xl xl:text-3xl xl:text-left text-center font-semibold border-b-2 xl:w-52 border-slate-500">
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
