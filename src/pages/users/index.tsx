import {
  ActionButton,
  Pagination,
  SearchInput,
  UserTwoBox,
} from "@/components/elements";
import UserCreateContainer from "@/components/fragments/containers/createUserContainer";
import MainLayout from "@/layouts/mainLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { User, typeDataUser } from "@/types/User";
import { useAtom } from "jotai";
import { loaderAtom } from "@/stores";
const Users = () => {
  const [search, setSearch] = useState<string>("");
  const [_isLoader, setIsLoader] = useAtom<Boolean>(loaderAtom);
  const [act, setAct] = useState<boolean>(false);
  const [dataUsers, setDataUsers] = useState<User[]>([]);
  const [dataUser, setDataUser] = useState<typeDataUser>({
    email: "",
    gender: "female",
    name: "",
    status: "inactive",
  });

  const [userFilter, setUserFilter] = useState<User[]>([]);
  const [pageAct, setPageAct] = useState<{ page: number; per_page: number }>({
    page: 1,
    per_page: 9,
  });

  const fetchData = async () => {
    try {
      setIsLoader(true)
      const token = localStorage.getItem("token")
      const headers = {
        token: token
      }
      if(!token) {
        return null
      }
        const { data } = await axios.get(
          `/api/users/get?page=${pageAct.page}&per_page=${pageAct.per_page}`,
          {headers}
          );
          setDataUsers(data);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoader(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageAct]);

  const handleBtnAct = () => {
    setAct(!act);
    if(act == true){
      setDataUser({
          email: "",
          gender: "",
          name: "",
          status: "inactive",
        });
      }
  };

  const btnPageHendler = (idx: number) => {
    setPageAct((prev) => ({ ...prev, page: idx + 1 }));
  };

  const btnPageNextHendler = () => {
    setPageAct((prev) => ({
      ...prev,
      page:
        prev.page < Math.ceil(dataUsers.length / prev.per_page)
          ? prev.page + 1
          : prev.page,
    }));
  };

  const btnPageReturnHendler = () => {
    setPageAct((prev) => ({
      ...prev,
      page: prev.page === 1 ? 1 : prev.page - 1,
    }));
  };

  useEffect(() => {
    const filteredUsers = dataUsers.filter((prev) =>
      prev.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setUserFilter(filteredUsers);
  }, [search, dataUsers]);

  const btnCreateUserHendler = async () => {
    const token = localStorage.getItem("token")
    setAct(!act);
    try {
      if (!dataUser.id) {
        const response = await axios.post("/api/users/create", {
          data: dataUser,
          token: token
        });
      } else {
        const response = await axios.patch(
          `/api/users/edite?id=${dataUser.id}`,
          { data: dataUser, token: token }
        );
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  //delete user
  const btnDeleteUserHendler = async (id: number) => {
    try {
      const token = localStorage.getItem("token")
      const headers = {token : token }
      const response = await axios.delete(`/api/users/delete?id=${id}`, {headers});
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  //edite user

  return (
    <main className="overflow-hidden">
      <MainLayout>
        <section className="mx-4 xl:mx-16 mt-28">
          <h2 className="text-xl sm:text-2xl xl:text-4xl text-center sm:text-left font-semibold">Users</h2>
          <div className="flex xl:flex-row flex-col items-center justify-between mt-7">
            <SearchInput
              onChange={setSearch}
              value={search}
              placeholder="Search"
            />
            <ActionButton
              variant="violet"
              className="text-sm xl:text-xl text-white w-28 xl:w-52 font-semibold xl:mt-0 mt-3"
              onClick={handleBtnAct}
            >
              Create User
            </ActionButton>
          </div>
        
            {dataUsers.length !== 0 ? 
              <>
              <div className="grid xl:grid-rows-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
              {(userFilter.length === 0 ? dataUsers : userFilter).map(
                (item, idx) => (
                  <UserTwoBox
                    key={idx}
                    data={item}
                    btnHendler={btnDeleteUserHendler}
                    setEditeUser={setDataUser}
                    btnEditeHendler={handleBtnAct}
                  />
                )
              )}
            </div>
            <div className="mt-10 mb-16">
              <Pagination
                clickHendler={btnPageHendler}
                nextHendler={btnPageNextHendler}
                returnHendler={btnPageReturnHendler}
                dataLength={dataUsers.length}
                numAct={pageAct.page - 1}
                />
            </div>
                </>
                :
                <p className="text-2xl sm:text-4xl text-center mt-56">Halaman hanya bisa di akses jika memiliki token</p>
            }
          
            
        </section>
        {act && (
          <UserCreateContainer
            data={dataUser}
            setDataHendler={setDataUser}
            btnHendle={handleBtnAct}
            btnHeandleCreate={btnCreateUserHendler}
          />
        )}
      </MainLayout>
    </main>
  );
};

export default Users;
