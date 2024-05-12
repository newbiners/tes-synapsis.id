import { IoPersonCircleSharp } from "react-icons/io5";

const CommentBox: React.FC<{
    name: string;
    email: string;
    body: string
}> = ({
  name,
  email,
  body,
}) => {
  return (
    <section className="flex gap-4 items-start">
      <main>
        <div className="flex sm:flex-row flex-col items-center gap-2 text-xl">
          <p className="text-xs">{name}</p>
          <span className="xl:block hidden">|</span>
          <p className="text-xs">{email}</p>
        </div>
        <div className="bg-sky-50 rounded-xl p-4">
          <p className="text-lg xl:text-2xl">{body}</p>
        </div>
      </main>
      <IoPersonCircleSharp className="text-5xl sm:block hidden"/>
    </section>
  );
};

export default CommentBox;
