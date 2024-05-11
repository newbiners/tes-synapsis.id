import PostBox from "@/components/elements/boxs/postBox";
import { Pagination } from "@/components/elements";
import { BlogPost } from "@/types/BlogPost";
const PostContainer: React.FC<{
  data: BlogPost[];
  nextHandler: () => void;
  returnHandler: () => void;
  clickHandler: (idx: number) => void;
  numberAct: number;
  dataLength: number;
}> = ({
  data,
  nextHandler,
  returnHandler,
  numberAct,
  dataLength,
  clickHandler,
}) => {
  return (
    <main className="mx-5 sm:mx-16 my-6 sm:my-16">
      <h2 className="text-xl sm:text-4xl text-center sm:text-left font-semibold">Blogs</h2>
      <section className="grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-3 gap-10 mt-10">
        {data.map((item, idx) => (
          <PostBox key={idx} post={item.title} id={item.id} />
        ))}
      </section>
      <section className="mt-14">
        <Pagination
          dataLength={dataLength}
          numAct={numberAct - 1}
          clickHendler={clickHandler}
          nextHendler={nextHandler}
          returnHendler={returnHandler}
        />
      </section>
    </main>
  );
};

export default PostContainer;
