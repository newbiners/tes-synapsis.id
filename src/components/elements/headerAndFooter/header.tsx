import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
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
    <header className="flex items-center h-24 z-20 bg-white justify-between px-8 border-b-2 absolute w-full shadow-sm shadow-slate-600 border-slate-600">
      <div className="flex items-center w-40">
        <p className="font-bold ">test - gufron</p>
      </div>
      <div className="w-full flex justify-center">
        <nav className="flex items-center gap-8 text-xl w-1/2 justify-between font-semibold">
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
      </div>
    </header>
  );
};

export default Header;
