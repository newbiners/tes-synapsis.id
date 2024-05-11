import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Header = () => {
  const router = useRouter();
const [open,setOpen] = useState(false)
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
    <header className="flex items-center h-24 z-20 bg-white justify-between px-8 border-b-2 absolute w-full shadow-sm shadow-slate-600 border-slate-600">
      <div className="flex items-center w-40">
        <p className="font-bold ">test - gufron</p>
      </div>
      <div className="w-full flex justify-center">
        <nav className="hidden sm:flex items-center gap-8 text-xl w-1/2 justify-between font-semibold">
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
        {/* navigation in mobile */}
        <main className="flex sm:hidden justify-end w-full">
          <button className="text-3xl" onClick={() => setOpen(true)}>☰</button>
          {   open &&
            <nav className="flex flex-col bg-white p-4 gap-3 font-semibold shadow-2xl text-center absolute w-full left-0 top-0">
            <button className="text-3xl absolute top-4 right-4" onClick={() => setOpen(false)}>
              <IoMdClose />
            </button>
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
          }
        </main>
        {/*  */}
      </div>
    </header>
  );
};

export default Header;
