import { IoPersonCircleOutline } from "react-icons/io5";

const UserBox:React.FC<{
    name: String;
    email: String
}> = ({name, email, ...props}) => {
    return(
        <main {...props} className="bg-sky-50 p-6 rounded-2xl flex items-center gap-4 shadow-xl">
            <IoPersonCircleOutline className="text-6xl"/>
            <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-base">{email}</p>
            </div>
        </main>
    )
}

export default UserBox;