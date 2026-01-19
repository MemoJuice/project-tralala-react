import { useEffect, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageContext } from "../context/MessageContext";
import { useSearchParams } from "react-router-dom";



import DailyPlanCard from "@/components/serviceslist/DailyPlanCard";
import MonthlyplanCard from "@/components/serviceslist/MonthlyplanCard";
import HospitalPlanCard from "@/components/serviceslist/HospitalPlanCard";
import MenuBar from "@/components/serviceslist/MenuBar";



export default function ServicesList (){
 
  const [view, setView] = useState("hospitalplan"); 
    // const {view, setView} = useContext(MessageContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const viewFromLink = searchParams.get("view");
    if (viewFromLink) {
      setView(viewFromLink);
    }
  }, [searchParams]);

    return (
        <div className="flex flex-col justify-evenly px-10 pb-10 items-center">
          <MenuBar setView={setView} />
          
          <main className="items-center w-full justify-center">
            <AnimatePresence mode="wait">
          {view === "hospitalplan" && (
            <motion.div
              key="hospital"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <HospitalPlanCard />
            </motion.div>
          )}

          {view === "dailyplan" && (
            <motion.div
              key="daily"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <DailyPlanCard />
            </motion.div>
          )}

          {view === "monthlyplan" && (
            <motion.div
              key="monthly"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <MonthlyplanCard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
        </div>
  );
}