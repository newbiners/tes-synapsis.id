import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const UserTwoBox = () => {
    return(
        <div className="h-56 bg-sky-50 flex justify-between items-center rounded-2xl overflow-hidden">
            <section className="h-full flex flex-col items-center p-3">
                <IoMdFemale className="text-violet-600 text-3xl"/>
                <p>Male</p>
            </section>
            <section className="flex flex-col items-center">
                <IoPersonCircleOutline className="text-6xl"/>
                <h2 className="text-xl">Dea</h2>
                <p className="text-xs">Dea@gmail.com</p>
                <section className="flex items-center gap-3 mt-4">
                    <button className="flex items-center">
                        <MdEdit/>
                        <p>Edit</p>
                    </button>
                    <button className="flex items-center">
                        <MdDeleteOutline/>
                        <p>Delete</p>
                    </button>
                </section>
            </section>
            <section className="bg-red-400 self-start w-20 h-5 flex items-center justify-center text-white text-xs">Active</section>
        </div>
    )
}

export default UserTwoBox;