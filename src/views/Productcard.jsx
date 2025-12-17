import { Link } from "react-router"

export default function Productcard (){
    return (
        <div className="min-h-full mx-4 md:mx-24 mt-24 mb-8 bg-white rounded-2xl shadow p-6 font-noto">
			<h2 className="text-4xl font-semibold mb-8 text-center">นานา จ๋าจ๋า</h2>
			<div className="flex flex-col lg:flex-row gap-6 justify-center">
				<img src="./../asstes/images/p1-post2.png"
					className="w-100 h-125 object-cover rounded-xl" />

				<div className="flex flex-col">
					<div className="hidden lg:flex flex-col justify-evenly">
						<div className="flex gap-3">
							<img src="./../asstes/images/p1-post1.png"
									className="h-100 object-cover rounded-xl" />
							<img src="./../asstes/images/p1-post3.png"
									className="h-80 object-cover rounded-xl" />
						</div>
					</div>
					<div className="flex md:flex-row-reverse justify-evenly mt-auto h-12">
						<p className="text-xl font-medium self-center">เริ่มต้น 300 THB</p>
							<Link to ="/order"><button className="h-full bg-green-200 text-green-900 w-30 rounded-xl text-xl font-medium hover:bg-green-300 hover:cursor-pointer">
								จองบริการ
							</button></Link>
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

			{/* <!-- Review --> */}

				<div className="w-full">
					<h3 className="text-2xl font-bold mb-3">Review</h3>

					<div className="bg-gray-100 p-4 rounded-xl text-gray-700">
						<p className="lg font-semibold">Veolia Wrigxton</p>
						<p className="text-xs text-gray-500 mb-2">ลูกค้าในกิจกรรม ElderHub</p>
						<p className="text-sm">
							I was completely blown away by the exceptional care and attention to detail.
						</p>
					</div>
				</div>
			</div>

		{/* <!-- Booking Calendar  --> */}

			<div className="flex flex-col mt-8 w-fit mx-auto">
				<h3 className="text-3xl font-bold mb-3">Booking</h3>

			{/* <!-- Booking Calendar Desktop  --> */}

				<div className="flex-col justify-evenlys">
					<div className="flex justify-evenly md:*:mx-6">
						<img src="./../asstes/images/calendar1.png"
							className="w-125 h-auto object-cover rounded-xl" />
						<img src="./../asstes/images/calendar2.png"
							className="hidden md:block w-125 h-auto object-cover rounded-xl" />
					</div>
					<div className="flex gap-4 justify-center mt-4 h-12">
						<p className="text-xl font-medium self-center">เริ่มต้น 300 THB</p>
							<Link to="/order"><button className="h-full bg-green-200 text-green-900 w-30 rounded-xl text-xl font-medium hover:bg-green-300 hover:cursor-pointer">
								จองบริการ
							</button></Link>
					</div>
				</div>
			</div>
        </div>
    )
}