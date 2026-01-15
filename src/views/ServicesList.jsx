import DailyPlanCard from "@/components/serviceslist/DailyPlanCard";
import { useState } from "react";
import MonthlyplanCard from "@/components/serviceslist/MonthlyplanCard";
import HospitalPlanCard from "@/components/serviceslist/HospitalPlanCard";
import MenuBar from "@/components/serviceslist/MenuBar";


export default function ServicesList (){

    const [ view, setView ] = useState("dailyplan");

    return (
        <div className="flex flex-col justify-evenly px-10 pb-10 items-center">
          <MenuBar setView={setView} />
          <main className="items-center w-full justify-center">
              {view === "hospitalplan" && <HospitalPlanCard />}
              {view === "dailyplan" && <DailyPlanCard />}
              {view === "monthlyplan" && <MonthlyplanCard />}
          </main>
        </div>
  );
}