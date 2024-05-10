import MainLayout from "@/layouts/mainLayout";
import { Inter, Poppins } from "next/font/google";
import { UserContainer, PostContainer, CaroselBlog } from "@/components/fragments"; 
const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} overflow-hidden`}>
      <MainLayout>
        <CaroselBlog />
        <UserContainer/>
        <PostContainer/>
      </MainLayout>
    </main>
  );
}
