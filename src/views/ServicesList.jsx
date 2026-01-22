import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageContext } from "../context/MessageContext";
import { useSearchParams } from "react-router-dom";



import DailyPlanCard from "@/components/serviceslist/DailyPlanCard";
import MonthlyplanCard from "@/components/serviceslist/MonthlyplanCard";
import HospitalPlanCard from "@/components/serviceslist/HospitalPlanCard";
import MenuBar from "@/components/serviceslist/MenuBar";



export default function ServicesList (){
    const {API} = useContext(MessageContext);
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    const [view, setView] = useState("dailyplan"); 
      // const {view, setView} = useContext(MessageContext);
    const [searchParams] = useSearchParams();

    useEffect(() => {
      const viewFromLink = searchParams.get("view");
      if (viewFromLink) {
        setView(viewFromLink);
      }
    }, [searchParams]);

    const fetchServices = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API}/services/serviceslist`);
        setServices(res.data.data);
      } catch {
        alert("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchServices();
      if (sessionStorage.getItem("token")) {
          sessionStorage.removeItem("cart");
      } else if (localStorage.getItem("token")) {
          localStorage.removeItem("cart");
      };
    }, []);

    return (
      <div className="flex flex-col justify-evenly px-10 pb-10 items-center">
        <MenuBar setView={setView} />
        {loading ? 
          <div className="text-4xl font-bold animate-bounce text-black text-center mt-8">Loading...</div>
          : <main className="items-center w-full justify-center">
              <AnimatePresence mode="wait">
            {view === "hospitalplan" && (
              <motion.div
                key="hospital"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
              >
                <HospitalPlanCard service={services.find((service) => service._id === "659e1001f1a2b3c4d5e6f001")} />
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
                <DailyPlanCard service={services.find((service) => service._id === "659e1001f1a2b3c4d5e6f002")} />
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
                <MonthlyplanCard  service={services.find((service) => service._id === "659e1001f1a2b3c4d5e6f003")} />
              </motion.div>
            )}
            </AnimatePresence>
          </main>
        }
    </div>
  );
}