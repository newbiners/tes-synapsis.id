import Footer from "@/components/elements/headerAndFooter/footer";
import Header from "@/components/elements/headerAndFooter/header";
import { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen mt-24">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
