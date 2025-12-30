import { Link } from "react-router-dom"

export default function BookingCalendar (){
    return (
			<div className="flex flex-col mt-8 w-fit mx-auto">
				<h3 className="text-3xl font-bold mb-3">Booking</h3>

			{/* <!-- Booking Calendar Desktop  --> */}

				<div className="flex-col justify-evenlys">
					<div className="flex justify-evenly md:*:mx-6">
						<img src="images/calendar1.png"
							className="w-125 h-auto object-cover rounded-xl" />
						<img src="images/calendar2.png"
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
    )
}