import UserBox from "@/components/elements/boxs/userBox";
import { User } from "@/types/User";
const UserContainer:React.FC<{
  data: User[]
}> = ({data}) => {
  return (
    <main className="mt-14 mx-20">
      <h2 className="border-b-2 border-slate-500 w-64 text-4xl font-semibold">
        users active
      </h2>
      <section className="flex gap-5 overflow-x-auto py-11">
        {data.map((item, idx) => (
          <UserBox key={idx} email={item.email} name={item.name} />
        ))}
      </section>
    </main>
  );
};

const dataDummy = [
  {
    email: "dds_dharitri_mishra@bernhard.example",
    name: "Dharitri Mishra DDS",
  },
  {
    email: "dds_dharitri_mishra@bernhard.example",
    name: "Dharitri Mishra DDS",
  },
  {
    email: "dds_dharitri_mishra@bernhard.example",
    name: "Dharitri Mishra DDS",
  },
  {
    email: "dds_dharitri_mishra@bernhard.example",
    name: "Dharitri Mishra DDS",
  },
  {
    email: "dds_dharitri_mishra@bernhard.example",
    name: "Dharitri Mishra DDS",
  },
];

export default UserContainer;
