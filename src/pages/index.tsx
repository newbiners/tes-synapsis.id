import ActionButton from "@/components/elements/buttons/actionButton";
import Footer from "@/components/elements/headerAndFooter/footer";
import Header from "@/components/elements/headerAndFooter/header";
import MainLayout from "@/layouts/mainLayout";
import { Inter, Poppins } from "next/font/google";
import CaroselBlog from "@/components/fragments/caroselBlog";
const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} overflow-hidden`}>
     <MainLayout>
<CaroselBlog/>
     </MainLayout>
    </main>
  );
}
