import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { User, typeDataUser,} from "@/types/User";
import { Dispatch } from "react";
const UserTwoBox:React.FC<{
data: User;
btnHendler: (idx: number) => void;
setEditeUser: Dispatch<React.SetStateAction<typeDataUser>>;
btnEditeHendler: () => void
}> = ({data, btnHendler, setEditeUser, btnEditeHendler}) => {
    const btnEdite = () => {
        setEditeUser(data)
        btnEditeHendler()
    }
    return(
        <div className="h-56 bg-sky-50 flex justify-between items-center rounded-2xl overflow-hidden">
            <section className="h-full flex flex-col items-center p-3">
                {data.gender === "male" ?
                 <IoMdMale className="text-violet-600 text-3xl"/>
                :
                <IoMdFemale className="text-red-400 text-3xl"/>
                }
                <p>{data.gender}</p>
            </section>
            <section className="flex flex-col items-center">
                <IoPersonCircleOutline className="text-6xl"/>
                <h2 className="text-xl">{data.name}</h2>
                <p className="text-xs">{data.email}</p>
                <section className="flex items-center gap-3 mt-4">
                    <button className="flex items-center" onClick={btnEdite}>
                        <MdEdit/>
                        <p>Edit</p>
                    </button>
                    <button className="flex items-center" onClick={() => btnHendler(data.id)}>
                        <MdDeleteOutline/>
                        <p>Delete</p>
                    </button>
                </section>
            </section>
            <section className={`${data.status == "inactive" ? "bg-red-400" : "bg-blue-600"} self-start w-20 h-5 flex items-center justify-center text-white text-xs`}>{data.status}</section>
        </div>
    )
}

export default UserTwoBox;