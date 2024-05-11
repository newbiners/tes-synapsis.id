import { Footer, Header } from "@/components/elements";
import AccessTokenContainer from "@/components/fragments/accessTokenContainer";
import { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
    <AccessTokenContainer/>
      <Header />
      <main className="min-h-screen mt-24">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
