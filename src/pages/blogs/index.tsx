import { PostContainer } from "@/components/fragments";
import MainLayout from "@/layouts/mainLayout";

const Blogs = () => {
  return (
    <main className="overflow-hidden">
      <MainLayout>
        <section className="mt-28">
        <PostContainer />
        </section>
      </MainLayout>
    </main>
  );
};

export default Blogs;
