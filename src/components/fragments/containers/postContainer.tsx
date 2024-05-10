import PostBox from "@/components/elements/boxs/postBox";
import { Pagination } from "@/components/elements";
const PostContainer = () => {
  return (
    <main className="mx-16 my-16">
      <h2 className=" text-4xl font-semibold">Blogs</h2>
      <section className="grid grid-cols-3 grid-rows-3 gap-10 mt-10">
        {dataDummy.map((item, idx) => (
          <PostBox key={idx} name={item.name} post={item.post} />
        ))}
      </section>
      <section className="mt-14">
      <Pagination dataLength={10} numAct={1-1}/>
      </section>
    </main>
  );
};

const dataDummy = [
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
  {
    name: "Dharitri Mishra DDS",
    post: " Decet aedificium volubilis perspiciatis delego vobis deripio defessussit",
  },
];

export default PostContainer;
