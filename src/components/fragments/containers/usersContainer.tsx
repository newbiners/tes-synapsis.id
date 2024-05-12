import UserBox from "@/components/elements/boxs/userBox";
import { User } from "@/types/User";
const UserContainer:React.FC<{
  data: User[]
}> = ({data}) => {
  return (
    <main className="mt-14 mx-5 sm:mx-12 xl:mx-20">
      <h2 className="xl:border-b-2 border-slate-500 xl:w-64 text-xl text-center sm:text-start sm:text-2xl xl:text-4xl font-semibold">
        users active
      </h2>
      <section className="flex gap-5 overflow-x-auto py-11">
        {data.length !== 0 ? data.map((item, idx) => (
          <UserBox key={idx} email={item.email} name={item.name} />
        )) : <p className="sm:text-left text-center w-full">hanya bisa di akses jika memiliki token</p>}
      </section>
    </main>
  );
};

export default UserContainer;
