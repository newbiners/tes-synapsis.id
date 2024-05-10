import { ActionButton, Pagination, SearchInput, UserTwoBox } from "@/components/elements";
import UserCreateContainer from "@/components/fragments/containers/createUserContainer";
import MainLayout from "@/layouts/mainLayout";
import { HtmlHTMLAttributes, useState } from "react";
const Users = () => {
  const [search, setSearch] = useState<string>("");
  console.log(search, "values");
  return (
    <main className="overflow-hidden">
      <MainLayout>
        <section className="mx-16 mt-28">
          <h2 className=" text-4xl font-semibold">Users</h2>
          <div className="flex items-center justify-between mt-7">
            <SearchInput
              onChange={setSearch}
              value={search}
              placeholder="Search"
            />
            <ActionButton
              variant="violet"
              className="text-xl text-white w-52 font-semibold"
            >
              Create User
            </ActionButton>
          </div>
          <div className="grid grid-rows-3 grid-cols-3 gap-10 mt-10">
            {Array.from({length : 10}).map((_item, idx) => 
            <UserTwoBox key={idx}/>
            )
            }
          </div>
          <div className="mt-10 mb-16">
          <Pagination dataLength={10} numAct={1}/>
          </div>
        </section>
        <UserCreateContainer/>
      </MainLayout>
    </main>
  );
};

export default Users;
