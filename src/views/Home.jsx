import ServiesBox  from "../components/homepage/ServiesBox";
import ServiceSection from "../components/homepage/Servies-section";
import UserReview from "../components/homepage/User-review";
import TopCaregiver from "../components/homepage/Top-caregiver";
import WhyUS from "../components/homepage/Whyus";

export default function Home() {
  return (
    <div>
       <section className="flex h-[calc(100dvh-64px)] w-full font-inter bg-[url(/images/section1-bg.png)] bg-cover bg-position-[center_left_40%] md:bg-position-[center_30%]">
        <div className=" absolute w-full h-80 bg-linear-to-b from-white to-[rgba(255,255,255,0)]"></div>
        <div className=" absolute w-full h-[calc(100dvh-64px)] bg-radial-[at_0%_0%] from-[rgba(255,255,255,0)] via-[rgb(244, 168, 255,0.1)] via-70% to-pink-300"></div>
        <div className="flex flex-col md:flex-row md:gap-8 justify-between w-full px-4 pb-10 md:pl-30 bg-radial-[at_100%_100%] from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0)] via-30% to-white z-1">

          {/* <!-- Left content --> */}
          <div className="flex flex-col md:w-[60%] text-pretty font-noto">
            <h1 className="text-5xl font-bold leading-tight pt-8 md:pt-40 text-shadow-2xs md:text-6xl text-gray-700">
              ความสุขดีๆ... <br className="sm:hidden" />แค่มีคนดูแล
            </h1>
            <p className="mt-105 text-2xl font-semibold text-gray-700 text-shadow-2xs md:mt-5 md:text-4xl">
              ค้นหาผู้ดูแลที่เหมาะสม<br className="sm:hidden" />สำหรับคนที่คุณรัก
            </p>
            <ServiesBox />
          </div>
        </div>
      </section>
      <ServiceSection />
      <UserReview />
      <TopCaregiver />
      <WhyUS />
    </div>
  );
}
