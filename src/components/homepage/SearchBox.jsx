import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../../context/MessageContext";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const { setSearchQuestion } = useContext(MessageContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchValue.trim()) {
      alert("กรุณาใส่ความต้องการก่อนค้นหา"); // show alert in Thai
      return;
    }
    setSearchQuestion(searchValue);   // save into context
    navigate("/ourcaregiver");        // navigate to caregiver page
  };

  return (
    <div className="flex flex-col  gap-4 mt-3">
      <input
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="ค้นหาผู้ดูแลตามความต้องการของคุณ..."
        className="w-85 pl-4 justify-center md:w-100 md:text-2xl py-2 bg-white shadow-lg rounded-4xl overflow-hidden hover:shadow-xl items-center focus:outline-pink-400 "
      />
      <button
        onClick={handleSearch}
        className="w-85 md:w-100 md:text-2xl py-3 rounded-4xl bg-pink-400 text-white hover:bg-pink-600"
      >
        ค้นหา
      </button>
    </div>
  );
}
