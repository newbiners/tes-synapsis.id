import { Footer, Header, Loader } from "@/components/elements";
import AccessTokenContainer from "@/components/fragments/accessTokenContainer";
import { loaderAtom } from "@/stores";
import { useAtom } from "jotai";
import { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoader] = useAtom<Boolean>(loaderAtom);
  return (
    <>
    <AccessTokenContainer/>
      <Header />
      <main className="min-h-screen mt-24">{children}</main>
      <Footer />
      {isLoader && <Loader />}
    </>
  );
};

export default MainLayout;
