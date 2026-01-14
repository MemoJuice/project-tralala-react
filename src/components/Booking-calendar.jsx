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
							<Link to="/cart"><button className="h-full bg-pink-400 w-100 rounded-4xl text-xl text-white font-medium hover:bg-pink-600 hover:cursor-pointer">
								จองบริการ
							</button></Link>
					</div>
				</div>
			</div>
    )
}