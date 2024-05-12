import ActionButton from "../buttons/actionButton";
import { useRouter } from "next/router";
const PostBox: React.FC<{
  post: String;
  id: Number
}> = ({ post, id }) => {
  const router = useRouter();
  return (
    <main className="bg-sky-50 py-5 flex flex-col justify-between px-3 rounded-xl">
      <h3 className="text-xl xl:text-3xl font-semibold text-slate-900">{post}</h3>
      <ActionButton
        variant="violet"
        className="text-white font-semibold sm:h-14 mt-2 text-xs sm:text-sm xl:text-base xl:w-56"
        onClick={() => router.push(`blogs/${id}`)}
      >
        Read Now
      </ActionButton>
    </main>
  );
};

export default PostBox;
