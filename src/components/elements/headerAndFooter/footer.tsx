import Link from "next/link";
import { useRouter } from "next/router";
import ActionButton from "../buttons/actionButton";
import { GrInstagram } from "react-icons/gr";

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
    <footer className="h-96 p-9 bg-sky-50 flex items-end justify-between">
      <section>
        <nav className="flex flex-col gap-7 text-xl">
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
        <p className="text-base mt-10 font-semibold">gufronnewbiners@gmail.com</p>
      </section>
      <section >
        <nav className="flex justify-between">
            <GrInstagram className="text-4xl"/>
            <GrInstagram className="text-4xl"/>
            <GrInstagram className="text-4xl"/>
        </nav>
        <p className="text-2xl">Tes - Gufron Aprilianto</p>
      </section>
    </footer>
  );
};

export default Footer;
