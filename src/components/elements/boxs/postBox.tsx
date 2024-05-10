import ActionButton from "../buttons/actionButton";

const PostBox: React.FC<{
  post: String;
}> = ({ post }) => {
  return (
    <main className="bg-sky-50 py-5 flex flex-col justify-center px-3 rounded-xl">
      <h3 className="text-3xl font-semibold text-slate-900">{post}</h3>
      <ActionButton
        variant="violet"
        className="text-white font-semibold h-14 mt-2 w-56"
      >
        Read Now
      </ActionButton>
    </main>
  );
};

export default PostBox;
