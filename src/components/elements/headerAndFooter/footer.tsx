import Link from "next/link";
import { useRouter } from "next/router";
import ActionButton from "../buttons/actionButton";
import { GrInstagram } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const router = useRouter();

  const routeArr = [
    {
      title: "Home",
      go: "/",
    },
    {
      title: "Blogs",
      go: "/blogs",
    },
    {
      title: "Users",
      go: "/users",
    },
  ];

  return (
    <footer className="h-72 sm:h-96 p-9 bg-sky-50 flex flex-col  items-center w-full  justify-end">
      <section className="flex sm:flex-row flex-col w-full justify-between items-center sm:items-end">
        <nav className="flex gap-7 flex-row sm:flex-col text-xl">
          {routeArr.map((item) => (
            <Link
              key={item.go}
              href={item.go}
              className={
                router.pathname === item.go
                  ? "text-violet-600"
                  : "text-gray-800"
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <nav className="flex  justify-between mt-8 sm:mt-0 gap-5">
            <GrInstagram className="text-4xl" onClick={() => router.push("https://www.instagram.com/gufanto/")}/>
            <FaGithub className="text-4xl" onClick={() => router.push("https://github.com/newbiners")}/>
            <FaLinkedin className="text-4xl" onClick={() => router.push("https://www.linkedin.com/in/gufron-aprilianto-a046b1266/")}/>
        </nav>
      </section>
      <section className="flex  sm:flex-row flex-col w-full justify-between items-center sm:items-end mt-8">
      <p className="text-xs sm:text-base font-semibold">gufronnewbiners@gmail.com</p>
        <p className="text-sm sm:text-2xl">Tes - Gufron Aprilianto</p>
      </section>
    </footer>
  );
};

export default Footer;
