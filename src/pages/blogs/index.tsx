import { PostContainer } from "@/components/fragments";
import MainLayout from "@/layouts/mainLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types/BlogPost";
const Blogs = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [pageAct, setPageAct] = useState<{ page: number; per_page: number }>({
    page: 1,
    per_page: 9,
  });

  const btnPageHendler = (idx: number) => {
    setPageAct((prev) => ({ ...prev, page: idx + 1 }));
  };
  const btnPageNextHendler = () => {
    setPageAct((prev) => ({
      ...prev,
      page: prev.per_page > prev.page ? prev.page + 1 : prev.page,
    }));
  };

  const btnPageReturnHendler = () => {
    setPageAct((prev) => ({
      ...prev,
      page: prev.page == 1 ? 1 : prev.page - 1,
    }));
  };

  useEffect(() => {
    const blogHendler = async () => {
      try {
        const { data } = await axios.get(
          `/api/blog-post/get?page=${pageAct.page}&per_page=${pageAct.per_page}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    blogHendler();
  }, [pageAct]);
  return (
    <main className="overflow-hidden">
      <MainLayout>
        <section className="mt-28">
          <PostContainer
            data={data}
            nextHandler={btnPageNextHendler}
            returnHandler={btnPageReturnHendler}
            clickHandler={btnPageHendler}
            numberAct={pageAct.page}
            dataLength={pageAct.per_page}
          />
        </section>
      </MainLayout>
    </main>
  );
};

export default Blogs;
