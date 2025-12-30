import { Link } from "react-router";
import Searchbox  from "../components/Searchbox";

export default function Home() {
  return (
    <div>
       <section className="flex h-[calc(100dvh-64px)] w-full font-inter bg-[url(images/section1-bg.png)] bg-cover bg-position-[center_left_40%] md:bg-center">
        <div className=" absolute w-full h-80 bg-linear-to-b from-white to-[rgba(255,255,255,0)]"></div>
        <div className=" absolute w-full h-[calc(100dvh-64px)] bg-radial-[at_0%_0%] from-[rgba(255,255,255,0)] via-[rgb(244, 168, 255,0.1)] via-70% to-pink-300"></div>
        <div className="flex flex-col md:flex-row md:gap-8 justify-between w-full px-4 pb-10 md:pl-30 bg-radial-[at_100%_100%] from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0)] via-30% to-white z-1">

          {/* <!-- Left content --> */}
          <div className="flex flex-col md:w-[60%] text-pretty font-noto">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight pt-8 md:pt-12 text-gray-700">
              ความสุขดีๆ... <br className="sm:hidden" />แค่มีคนดูแล
            </h1>
            <p className="mt-3 text-2xl text-gray-700 md:pt-4 md:text-3xl">
              ค้นหาผู้ดูแลที่เหมาะสม<br className="sm:hidden" />สำหรับคนที่คุณรัก
            </p>

            {/* <!-- Search box --> */}


            <Searchbox />
            {/* <!-- tabs --> */}

            <div className="flex flex-wrap gap-3 mt-8">
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">ยอดนิยม</button>
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">คอมมูนิตี้</button>
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">กิจกรรม</button>
              <button className="px-4 py-2 bg-gray-50 rounded-full outline-1 outline-violet-200 hover:cursor-pointer hover:bg-violet-500 hover:text-white">สถานที่แนะนำ</button>
            </div>
          </div>

          {/* <!-- Image --> */}
          <div className="flex flex-col gap-2 md:w-[30%] items-center md:items-end mt-3 sm:mt-5 md:mr-10">
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
          </div>
        </div>

      </section>
{/* 
      <!-- ================================
          SERVICES SECTION
      ================================ --> */}

      <section id="service" className="bg-[#FEFBF2] py-20 font-noto">
        <div className="max-w-screen-xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">บริการของเรา</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* <!-- Card --> */}

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <a href="pages/order.html">
                <img src="https://www.vnshealth.org/wp-content/smush-webp/2022/05/best-qualities-caregiving-1536x1024.jpg.webp" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold">เยี่ยมบ้าน</h3>
                  <p className="text-sky-600 font-medium">เริ่มต้น 500 บาท</p>
                  <p className="text-gray-600">ตรวจสุขภาพ, ให้ความรู้, พูดคุย</p>
                  <p className="text-gray-500 text-sm mt-2">กรุงเทพ</p>
                </div>
              </a>
            </div>

            {/* <!-- Card --> */}

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <a href="pages/order.html">
                <img src="https://bucknerparkwayplace.org/wp-content/uploads/2023/03/What-Are-the-Duties-of-a-Respite-Caregiver.png" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold">บริการระยะสั้น</h3>
                  <p className="text-sky-600 font-medium">เริ่มต้น 600 บาท</p>
                  <p className="text-gray-600">ระยะเวลา 2 ชั่วโมงขึ้นไป</p>
                  <p className="text-gray-500 text-sm mt-2">กรุงเทพ</p>
                </div>
              </a>
            </div>

            {/* <!-- Card --> */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <a href="pages/order.html">
                <img src="https://assets.contenthub.wolterskluwer.com/api/public/content/b18f3052df5143139623db4bf6ba83ad?v=3ec1d82d&t=w768l" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold">บริการระยะยาว</h3>
                  <p className="text-sky-600 font-medium">เริ่มต้น 15,000 บาท</p>
                  <p className="text-gray-600">Caregiver ผ่านการอบรมครบถ้วน</p>
                  <p className="text-gray-500 text-sm mt-2">กรุงเทพ</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* <!-- ================================
          USERS REVIEW
      ================================ --> */}

      <section className="py-20">
      
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Users Review</h2>
          <p className="text-gray-600 mt-2 mb-10">What our users say about us</p>


          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl">🏠</div>
                <h3 className="text-xl font-semibold mt-3">Feel Like Home</h3>
                <p className="text-gray-600 mt-2">
                    Caring team, warm atmosphere, trusted by families.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl">👤</div>
                <h3 className="text-xl font-semibold mt-3">Professional</h3>
                <p className="text-gray-600 mt-2">
                  Skilled caregivers with experience and dedication.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl">❤️</div>
                <h3 className="text-xl font-semibold mt-3">Lovely</h3>
                <p className="text-gray-600 mt-2">
                  Compassion and empathy in every service we deliver.
                </p>
            </div>

          </div>
        </div>
      </section>



      {/* <!-- ================================
          TOP CAREGIVER
      ================================ --> */}

      <section className="py-20 bg-sky-50 font-inter">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Caregiver</h2>

          <div className="grid md:grid-cols-2 gap-10 px-4 items-center">
            {/* <!-- Image --> */}

            <div>
              <img 
                src="https://www.isavta.co.il/content/migrated-a779904c62a810bcaef859555e16fdc2-592.jpg"
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* <!-- Text --> */}

            <div>
              <h3 className="text-2xl font-bold">Cameron Williamson</h3>
              <p className="text-sky-600 font-medium mb-3">Caregiver</p>

              <p className="text-gray-700 leading-relaxed">
                Known for exceptional compassion and excellent service.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

        </div>
      </section>



      {/* <!-- ================================
          WHY US
      ================================ --> */}

      <section className="py-20 font-noto">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-14 px-4 items-center">

          {/* <!-- Text --> */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ทำไมต้องเลือกเรา</h2>

            <p className="text-gray-600 mb-6">
              เรามีทีมผู้ดูแลที่ผ่านการอบรม พร้อมบริการคุณภาพสูงระดับมืออาชีพ
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold">Trusted by Thousands</h3>
              <p className="text-gray-600">บริการที่ได้รับความไว้วางใจจากครอบครัวทั่วประเทศ</p>
            </div>

              <Link to="/productcard"><button className="bg-sky-500 text-white px-8 py-4 rounded-xl text-lg hover:bg-sky-600 pointer-events-auto hover:cursor-pointer">
                Booking Now
              </button></Link>
          </div>

          {/* <!-- Image --> */}

          <div>
            <img
              src="images/caregiver_booking.png"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
</div>
  );
}
