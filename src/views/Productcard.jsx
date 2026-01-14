import ReviewCaregiver from "../components/Review-caregiver";
import { Link } from "react-router-dom";
import BookingCalendar from "../components/BookingCalendar";

export default function Productcard (){
    return (
        <div className="min-h-full mx-4 md:mx-30 mt-24 mb-8 bg-white rounded-2xl shadow p-6 font-noto">
			<h2 className="text-4xl font-semibold mb-8 text-center">นานา จ๋าจ๋า</h2>
			<div className="flex flex-col lg:flex-row gap-6 justify-center">
				<img src="images/p1-post2.png"
					className="w-100 h-125 object-cover rounded-xl" />

				<div className="flex flex-col">
					<div className="hidden md:flex flex-col justify-evenly">
						<div className="flex-row">
							<img src="images/p1-post1.png"
								className="h-100 object-cover rounded-xl" />
							<Link to ="/cart"><button className="h-8  mt-10 bg-pink-400 text-white w-100 rounded-4xl text-xl hover:bg-pink-600 hover:cursor-pointer">
								จองบริการ
							</button></Link>
						</div>
					</div>
				</div>
			</div>

		<div className="flex flex-col gap-8 md:w-[60%] mx-auto mt-8">

		{/* <!-- Overview --> */}

				<div className="w-full">
					<h3 className="text-2xl font-bold">Overview</h3>
					<p className="text-sm text-gray-600 mt-3">
						Eyebrow text to label this content.
						Write a short introduction about the caregiver here.
					</p>
				</div>

		{/* <!-- Services --> */}

				<div className="w-full">
					<h3 className="text-2xl font-bold mb-3 ">Services</h3>
					<div className="grid grid-cols-1 gap-4 text-gray-700 text-xl">
						<div>
							<p className="font-bold">บริการเยี่ยมเยื่อน/ไปนอกสถานที่</p>
							<p className="text-base md:text-lg text-gray-500">ช่วยติดตามสุขภาพ พาออกกำลังกาย หรือไปสถานพยาบาลบริการดูแลร่างกาย</p>
						</div>
						<div>
							<p className="text-base md:text-lg font-bold">บริการระยะสั้น</p>
							<p className="text-lg text-gray-500">ฟื้นฟูและดูแลกิจกรรมประจำวัน เริ่มต้นรายชั่วโมง</p>
						</div>
						<div>
							<p className="text-base md:text-lg font-bold">บริการระยะยาว</p>
							<p className="text-lg text-gray-500">ดูแลกิจกรรมประจำวัน พาออกกำลังกาย หรือไปสถานพยาบาล</p>
						</div>
					</div>
				</div>
			<ReviewCaregiver />
			<BookingCalendar />

		</div>

		{/* <!-- Booking Calendar  --> */}

        </div>
    )
}