import { Dispatch } from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput: React.FC<{
  onChange: Dispatch<string>;
  value: string;
  placeholder?: string | undefined;
}> = ({ onChange, value, placeholder }) => {
  return (
    <span className="flex gap-2 items-center bg-slate-100 rounded-full px-6 py-3  justify-between">
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus:outline-none bg-transparent"
      />
      <FaSearch/>
    </span>
  );
};

export default SearchInput;
