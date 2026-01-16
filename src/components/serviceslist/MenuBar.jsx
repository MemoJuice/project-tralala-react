
export default function MenuBar ( { setView }){

    return (
          <div className="flex justify-evenly w-[90%] mt-8 bg-white rounded-2xl h-24 shadow-2xs ">
            <button 
              onClick={() => setView("hospitalplan")}
              className="flex flex-col md:text-2xl justify-center cursor-pointer items-center hover:bg-pink-400 rounded-4xl"> 🏥 บริการพาไปโรงพยาบาล 
              </button>
            <button 
              onClick={() => setView("dailyplan")}
              className="flex flex-col md:text-2xl justify-center cursor-pointer items-center hover:bg-pink-400 rounded-4xl"> 🤍  บริการดูแลรายวัน 
              </button>
            <button 
              onClick={() => setView("monthlyplan")}
              className="flex flex-col md:text-2xl justify-center cursor-pointer items-center hover:bg-pink-400 rounded-4xl"> 🏡  บริการดูแลรายเดือน 
              </button>
          </div>

    );
}