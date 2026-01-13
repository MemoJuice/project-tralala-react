import Searchbox  from "../components/Searchbox";
import ServiceSection from "../components/Servies-section";
import UserReview from "../components/User-review";
import TopCaregiver from "../components/Top-caregiver";
import WhyUS from "../components/Whyus";

export default function Home() {
  return (
    <div>
       <section className="flex h-[calc(100dvh-64px)] w-full font-inter bg-[url(/images/section1-bg.png)] bg-cover bg-position-[center_left_40%] md:bg-center">
        <div className=" absolute w-full h-80 bg-linear-to-b from-white to-[rgba(255,255,255,0)]"></div>
        <div className=" absolute w-full h-[calc(100dvh-64px)] bg-radial-[at_0%_0%] from-[rgba(255,255,255,0)] via-[rgb(244, 168, 255,0.1)] via-70% to-pink-300"></div>
        <div className="flex flex-col md:flex-row md:gap-8 justify-between w-full px-4 pb-10 md:pl-30 bg-radial-[at_100%_100%] from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0)] via-30% to-white z-1">

          {/* <!-- Left content --> */}
          <div className="flex flex-col md:w-[60%] text-pretty font-noto">
            <h1 className="text-5xl md:text-200xl font-bold leading-tight pt-8 md:pt-12 text-gray-700">
              ความสุขดีๆ... <br className="sm:hidden" />แค่มีคนดูแล
            </h1>
            <p className="mt-3 text-2xl text-gray-700 md:pt-4 md:text-3xl">
              ค้นหาผู้ดูแลที่เหมาะสม<br className="sm:hidden" />สำหรับคนที่คุณรัก
            </p>

            <Searchbox />

            {/* <div className="flex flex-wrap gap-3 mt-8">
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">ยอดนิยม</button>
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">คอมมูนิตี้</button>
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">กิจกรรม</button>
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">สถานที่แนะนำ</button>
            </div> */}
          </div>

          {/* <div className="flex flex-col gap-2 md:w-[30%] items-center md:items-end mt-3 sm:mt-5 md:mr-10">
            <div className="h-[70%] sm:h-[60%] md:h-auto">
              <img 
                src="images/senior-care-profressional-hero.png"
                className="rounded-[50px] md:rounded-bl-[150px] md:rounded-tl-[20%] md:rounded-br-[20%] md:rounded-tr-[50px] shadow-xl h-full"
              />
            </div>
            <div className="hidden md:block w-[60%]">
              <img 
                src="images/senior_community-2.png"
                className="rounded-[50px] md:rounded-bl-[150px] md:rounded-tl-[20%] md:rounded-br-[20%] md:rounded-tr-[50px] shadow-xl"
              />
            </div>
            <div className="hidden md:block w-[30%]">
              <img 
                src="images/senior_community-3.png"
                className="rounded-[50px] md:rounded-bl-[150px] md:rounded-tl-[20%] md:rounded-br-[20%] md:rounded-tr-[50px] shadow-xl"
              />
            </div>
          </div> */}
        </div>
      </section>
      <ServiceSection />
      <UserReview />
      <TopCaregiver />
      <WhyUS />
    </div>
  );
}
