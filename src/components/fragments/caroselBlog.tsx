import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ActionButton from "../elements/buttons/actionButton";
import { BlogPost } from "@/types/BlogPost";
const CaroselBlog:React.FC<{
data: BlogPost[]
}> = ({data}) => {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev < dataArr.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const btnNextHandler = () => {
    setIndex((prev) => (prev < dataArr.length - 1 ? prev + 1 : 0));
  }

  const btnReturnHandler = () => {
    setIndex((prev) => (prev !== 0 ? prev - 1 : dataArr.length - 1));
  }
  return (
    <main className="h-128 bg-sky-50 flex items-center justify-between px-10 gap-10">
      <FaArrowLeft className="text-3xl" onClick={btnReturnHandler}/>
      <section className="w-full flex justify-center h-full items-center">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="absolute flex flex-col items-center text-center w-3/4 transition-all"
            style={{ opacity: idx === index ? 1 : 0 }}
          >
            <h1 className="text-4xl text-slate-900 font-semibold w-2/3">
              {item.title}
            </h1>
            <p className="mt-3 text-2xl">{item.body}</p>
            <ActionButton
              variant="violet"
              className="text-white font-semibold w-48 mt-8"
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
const dataArr = [
  {
    judul:
      "Decet aedificium volubilis perspiciatis delego vobis deripio defessus sit.",
    des: "Curvo clibanus thesaurus. Arto id vestrum. Ara ventus amissio. Atque usque ager. Sed cinis abstergo. Rerum adfectus incidunt. Suadeo votum sortitus. Arguo verto eveniet. Curvus vulariter subito. Maiores aegre debilito. Cumque chirographum adfectus. Calcar ademptio decet.",
    outher: "Dharitri Mishra DDS",
    email: "dds_dharitri_mishra@bernhard.example",
  },
  {
    judul:
      "Decet aedificium volubilis perspiciatis delego vobis deripio defessus sit.",
    des: "Curvo clibanus thesaurus. Arto id vestrum. Ara ventus amissio. Atque usque ager. Sed cinis abstergo. Rerum adfectus incidunt. Suadeo votum sortitus. Arguo verto eveniet. Curvus vulariter subito. Maiores aegre debilito. Cumque chirographum adfectus. Calcar ademptio decet.",
    outher: "Dharitri Mishra",
    email: "dds_dharitri_mishra@bernhard.example",
  },
  {
    judul:
      "Decet aedificium volubilis perspiciatis delego vobis deripio defessus sit.",
    des: "Curvo clibanus thesaurus. Arto id vestrum. Ara ventus amissio. Atque usque ager. Sed cinis abstergo. Rerum adfectus incidunt. Suadeo votum sortitus. Arguo verto eveniet. Curvus vulariter subito. Maiores aegre debilito. Cumque chirographum adfectus. Calcar ademptio decet.",
    outher: "Mishra DDS",
    email: "dds_dharitri_mishra@bernhard.example",
  },
];
