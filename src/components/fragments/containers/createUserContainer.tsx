import { ActionButton, UserInput } from "@/components/elements";
import { useState } from "react";
import { IoMale, IoFemale } from "react-icons/io5";
type dataType = {
  name: string;
  email: string;
};
const UserCreateContainer:React.FC<{
    btnHendle: () => void
}> = ({btnHendle}) => {
  const [data, setData] = useState<dataType>({
    name: "",
    email: "",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  return (
    <main className="h-screen w-full fixed top-0 flex items-center justify-center z-20">
      <div className="h-full w-full absolute bg-slate-600 opacity-25" />
      <form className="absolute z-30 bg-white p-14 rounded-2xl flex flex-col items-center">
        <section className="flex gap-6 w-[40rem]">
          <UserInput
            className="w-96"
            label="Name"
            value={data.name}
            onChange={handleNameChange}
          />
          <UserInput
            label="Email"
            value={data.email}
            onChange={handleEmailChange}
          />
        </section>
        <section className="flex items-center justify-between gap-16 w-96 mt-10">
          <ActionButton variant="violet" className="text-white flex justify-center">
            <IoFemale />
          </ActionButton>
          <ActionButton variant="blue" className="text-white flex justify-center">
            <IoMale />
          </ActionButton>
        </section>
        <section className="flex mt-12 w-full gap-7">
            <ActionButton variant="grey" className="w-72" onClick={btnHendle}>
                Cancle
            </ActionButton>
            <ActionButton variant="violet" className="text-white w-full">
                Create User
            </ActionButton>
        </section>
      </form>
    </main>
  );
};

export default UserCreateContainer;
