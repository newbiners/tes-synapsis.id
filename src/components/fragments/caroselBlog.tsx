import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ActionButton from "../elements/buttons/actionButton";
import { BlogPost } from "@/types/BlogPost";
import { useRouter } from "next/router";
const CaroselBlog:React.FC<{
data: BlogPost[]
}> = ({data}) => {
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const btnNextHandler = () => {
    setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  }

  const btnReturnHandler = () => {
    setIndex((prev) => (prev !== 0 ? prev - 1 : data.length - 1));
  }
  return (
    <main className="h-128 bg-sky-50 flex items-center justify-between px-3 xl:px-10 gap-10">
      <FaArrowLeft className="text-3xl" onClick={btnReturnHandler}/>
      <section className="w-full flex justify-center h-full items-center">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="absolute flex flex-col items-center text-center w-3/4 transition-all"
            style={{ opacity: idx === index ? 1 : 0 }}
          >
            <h1 className="text-xl sm:text-3xl xl:text-4xl text-slate-900 font-semibold xl:w-2/3">
              {item.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base xl:text-2xl">{item.body}</p>
            <ActionButton
              variant="violet"
              className="text-white text-xs sm:text-base xl:text-lg font-semibold w-28 sm:w-44 xl:w-48 mt-8"
              onClick={() => router.push(`blogs/${item.id}`)}

            >
              Read Now
            </ActionButton>
          </div>
        ))}
      </section>
      <FaArrowRight className="text-3xl" onClick={btnNextHandler}/>
    </main>
  );
};

export default CaroselBlog;
