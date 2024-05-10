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
    <main className="mx-16 my-16">
      <h2 className=" text-4xl font-semibold">Blogs</h2>
      <section className="grid grid-cols-3 grid-rows-3 gap-10 mt-10">
        {data.map((item, idx) => (
          <PostBox key={idx} post={item.title} />
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
