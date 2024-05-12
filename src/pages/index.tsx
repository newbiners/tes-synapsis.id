import MainLayout from "@/layouts/mainLayout";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types/BlogPost";
import axios, { AxiosResponse } from "axios";
import {
  UserContainer,
  PostContainer,
  CaroselBlog,
} from "@/components/fragments";
import { User } from "@/types/User";
import { useAtom } from "jotai";
import { loaderAtom } from "@/stores";
const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function Home() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [pageAct, setPageAct] = useState<{ page: number; per_page: number }>({
    page: 1,
    per_page: 9,
  });
  const [_isLoader, setIsLoader] = useAtom<Boolean>(loaderAtom);
  const [dataUsers, setDataUsers] = useState<User[]>([]);
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
    const usersHendler = async () => {
      try {
       
        const token = localStorage.getItem("token");
        const headers = {
          token: token,
        };
        if(token){
          const { data } = await axios.get("/api/users/get", { headers });
          const result = data.filter((prev: User) => prev.status === "active");
          setDataUsers(result);
        }
      } catch (e) {
        console.log(e);
      }
    };

    usersHendler();
  }, []);
  useEffect(() => {
    const blogHendler = async () => {
      try {
        setIsLoader(true)
        const { data } = await axios.get(
          `/api/blog-post/get?page=${pageAct.page}&per_page=${pageAct.per_page}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoader(false)
      }
    };
    blogHendler();
  }, [pageAct]);
  return (
    <main className={`${poppins.className} overflow-hidden`}>
      <MainLayout>
        <CaroselBlog data={data} />
        <UserContainer data={dataUsers} />
        <PostContainer
          clickHandler={btnPageHendler}
          nextHandler={btnPageNextHendler}
          returnHandler={btnPageReturnHendler}
          data={data}
          numberAct={pageAct.page}
          dataLength={pageAct.per_page}
        />
      </MainLayout>
    </main>
  );
}
