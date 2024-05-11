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
        <div className="flex items-center gap-2 text-xl">
          <p>{name}</p>
          <span>|</span>
          <p>{email}</p>
        </div>
        <div className="bg-sky-50 rounded-xl p-4">
          <p className="text-2xl">{body}</p>
        </div>
      </main>
      <IoPersonCircleSharp className="text-5xl"/>
    </section>
  );
};

export default CommentBox;
